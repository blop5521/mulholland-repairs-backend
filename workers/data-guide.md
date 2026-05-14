# Data Guide

*How to create rays, lytes, and views. The operational reference for building data structures in a field.*

Read `prima.md` for the philosophy. Read `stack.md` for infrastructure. This document is the recipe book.

---

## Concepts

| Term | What it is | Database |
|------|-----------|----------|
| **Ray** | A data structure in a field (e.g., Workers, Task Board, Menu Items) | `rays` table |
| **Lyte** | An attribute/column of a ray (e.g., name, status, price) | `lytes` table |
| **Ray Entry** | A row of data when no source table exists | `ray_entry` table (JSONB) |
| **Ray View** | A saved filter/sort/group configuration | `ray_view` table |
| **Source Table** | A real Postgres table a ray reads from | e.g., `tasks`, `workers`, `conversations` |

---

## Two kinds of rays

### 1. Source-table rays (reads from existing table)

The ray is a lens over a real Postgres table. Lytes map to table columns via `source_column`. Data already exists — the ray just makes it visible.

**Example:** Task Board ray reads from `tasks` table.

```
Ray: Task Board
  source_table: "tasks"
  source_filter: {}
  Lytes:
    title    -> tasks.title
    status   -> tasks.status
    priority -> tasks.priority
    worker   -> tasks.worker
    due_date -> tasks.due_date
```

### 2. JSONB rays (no source table)

The ray stores data in `ray_entry` as JSONB. No migration needed. Flexible, immediate. Good for custom data structures that don't need typed columns.

**Example:** Lessons Index ray stores entries in ray_entry.properties.

```
Ray: Menu Items
  source_table: null
  Lytes:
    name     (text, required)
    price    (number)
    category (select: appetizer, main, dessert, drink)
    active   (checkbox)
```

---

## Creating a ray

### Via API

```
POST /api/fields/{slug}/rays
Content-Type: application/json

{
  "name": "Menu Items",
  "icon": "🍽️",
  "description": "Restaurant menu items",
  "source_table": null,
  "rays": [
    { "key": "name", "label": "Name", "type": "text", "required": true },
    { "key": "price", "label": "Price", "type": "number" },
    { "key": "category", "label": "Category", "type": "select",
      "options": [
        { "value": "appetizer", "label": "Appetizer" },
        { "value": "main", "label": "Main" },
        { "value": "dessert", "label": "Dessert" },
        { "value": "drink", "label": "Drink" }
      ]
    },
    { "key": "active", "label": "Active", "type": "checkbox" }
  ]
}
```

### Via lyte-supabase (from a worker)

```bash
# Create the ray
lyte-supabase insert --table rays --json \
  '{"field_id":"<FIELD_UUID>","name":"Menu Items","icon":"🍽️","source_table":null,"kind":"data","status":"active","sort_order":10}'

# Create lytes for the ray
lyte-supabase insert --table lytes --json \
  '[
    {"ray_id":"<RAY_UUID>","key":"name","label":"Name","type":"text","required":true,"sort_order":0,"source":"created"},
    {"ray_id":"<RAY_UUID>","key":"price","label":"Price","type":"number","sort_order":1,"source":"created"},
    {"ray_id":"<RAY_UUID>","key":"category","label":"Category","type":"select","sort_order":2,"source":"created","options":[{"value":"appetizer","label":"Appetizer"},{"value":"main","label":"Main"}]}
  ]'
```

---

## Lyte types

| Type | What it stores | Example |
|------|---------------|---------|
| `text` | Free text string | "Hummus Plate" |
| `number` | Numeric value | 12.00 |
| `select` | Single choice from options | "appetizer" |
| `multi_select` | Multiple choices from options | ["gluten-free", "vegan"] |
| `date` | ISO date or datetime | "2026-05-10" |
| `checkbox` | Boolean true/false | true |
| `url` | URL string | "https://example.com" |
| `email` | Email address | "chef@restaurant.com" |
| `person` | Name/identifier of a person or worker | "backend-developer" |
| `relation` | Reference to another ray entry | "<UUID>" |

---

## Lyte rules

- `key` must be snake_case: `a-z`, `0-9`, `_` only
- `key` must be unique within a ray
- `label` is the display name (any characters)
- `source_column` maps to a real table column (source-table rays only)
- `options` is required for `select` and `multi_select` types
- `required: true` means the lyte cannot be empty
- `sort_order` determines column display order (0 = first)

---

## Source filters

A ray with `source_table` can filter rows using `source_filter`. This is how one table produces multiple rays.

**Example:** Conversations and Notes both read from `conversations` table:

```
Conversations ray:
  source_table: "conversations"
  source_filter: { "is_note": false }

Notes ray:
  source_table: "conversations"
  source_filter: { "is_note": true }
```

Filter supports:
- Equality: `{ "status": "active" }` → `WHERE status = 'active'`
- Boolean: `{ "is_note": true }` → `WHERE is_note = true`
- Null: `{ "archived_at": null }` → `WHERE archived_at IS NULL`

---

## Creating entries (JSONB rays)

For rays with `source_table: null`, data lives in `ray_entry`:

```bash
# Via API
POST /api/fields/{slug}/rays/{rayId}/entries
{
  "title": "Hummus Plate",
  "properties": {
    "price": 12.00,
    "category": "appetizer",
    "active": true
  }
}

# Via lyte-supabase
lyte-supabase insert --table ray_entry --json \
  '{"ray_id":"<RAY_UUID>","field_id":"<FIELD_UUID>","title":"Hummus Plate","properties":{"price":12.00,"category":"appetizer","active":true}}'
```

---

## Allowed source tables

Only these tables can be used as `source_table`:

| Table | Has field_id | Common use |
|-------|-------------|-----------|
| `tasks` | Yes | Task boards, project tracking |
| `conversations` | Yes | Chat threads, notes |
| `workers` | Yes | Worker registry |
| `worker_memory` | Yes | Knowledge entries |
| `activity_feed` | Yes | Event logs |
| `reports` | Yes | Specs, proposals, audits |
| `lessons` | Yes | Validated patterns |
| `lanes` | Yes | Parallel execution tracks |
| `briefs` | Yes | Project briefs |
| `blog_posts` | Yes | Content publishing |
| `inspiration` | Yes | Reference material |
| `assessments` | Yes | Client assessments |

Any table not in this list will be rejected. If you need a new source table, create a migration first.

---

## The 12 innate rays

Every field is born with these rays (created during finalize):

| Ray | Source Table | Filter | Icon |
|-----|------------|--------|------|
| Workers | workers | — | ⚡ |
| Conversations | conversations | is_note=false | 💬 |
| Notes | conversations | is_note=true | 📝 |
| Lanes | lanes | — | 🔀 |
| Task Board | tasks | — | ✓ |
| Worker Memory | worker_memory | — | 🧠 |
| Activity Feed | activity_feed | — | 📡 |
| Reports | reports | — | 📋 |
| Lessons Index | null (JSONB) | — | 📚 |
| Field Spectrums | field_spectrums | — | — |
| Inspirations | inspiration | — | — |
| Audits/Blog Posts | — | — | — |

---

## Updating a ray

```
PATCH /api/fields/{slug}/rays/{rayId}
{
  "name": "New Name",
  "icon": "🎯",
  "description": "Updated description",
  "status": "archived"
}
```

- `source_table` is **immutable** — cannot be changed after creation
- Set `status: "archived"` to retire a ray (no hard delete)
- `sort_order` controls sidebar position

---

## The lifecycle

```
User request ("I want to track bookings")
  → Worker creates ray via API (source_table: null, JSONB)
  → User adds entries, patterns emerge
  → If data grows: promote to real table (migration)
  → Ray's source_table updated, same lytes, same UI
  → Data is now typed, indexed, fast
```

JSONB first, prove the shape, then crystallize. This is the Create → Sustain → Transform cycle from prima.md applied to data.

---

## The three documents

```
prima.md       — why rays and lytes exist (philosophy)
data-guide.md  — how to create them (this document)
stack.md       — what infrastructure is available
```
