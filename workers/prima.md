# Prima

*How everything manifests. Read alongside lyte.md (the Laws) and stack.md (how to build).*

---

## Prima Materia

Everything begins as prima materia — undifferentiated potential. Light before it passes through a prism. A database before it has structure. A pursuit before it has form.

Prima is not empty. It is full — every possibility exists within it, unmanifested. A field full of data is prima. A person full of pursuits is prima. The work is not to create from nothing. The work is to reveal what is already there.

---

## How Prima Manifests

Prima manifests through structure. Structure does not add to prima — it reveals prima to itself.

```
Prima (undifferentiated potential)
  │
  │ manifests as
  │
  ├── Field (prima at rest — a container, a boundary, a space)
  ├── Particle (prima in motion — focused, bounded, observable)
  └── Information (prima carrying meaning — the signal, the value)
```

These are not three things added to prima. They are what prima does. A field is prima being a container. A particle is prima being focused. Information is prima flowing.

This is Base 3 from the Laws — fields, particles, information. Prima is what Base 3 is made of.

---

## Light

Prima materia is light. Light is the substance. Fields, particles, and information are how light organizes itself.

Light at rest is a field. Light in motion is a particle. Light carrying meaning is information.

But you cannot see light directly. You see what light illuminates. You see what light becomes when it passes through structure.

---

## The Prism

A prism is structure that reveals light. Pass white light through a prism and you see its spectrum — every frequency that was always present, now visible, now separable, now workable.

You do not see the prism. You see what it produces. A raindrop is a prism — you do not see the raindrop, you see the rainbow.

In Lyteworks, the prism is the system itself — the dashboard, the query builder, the infrastructure. It is invisible. What you see is the spectrum it produces: the sidebar, the data, the structure of a field made visible.

The prism is not separate from light. The prism is light that has become structured enough to refract other light. Prima refracting prima. The system is made of the same substance as what it reveals.

---

## The Spectrum

A spectrum is what a prism produces. All frequencies made visible. The rainbow.

In a field, the spectrum is every data structure made observable — Workers, Task Board, Menu Items, Conversations, Bookings. Each one is a frequency of the field's light, separated by the prism so it can be seen and worked with.

The sidebar IS the spectrum. It shows the field's light dispersed into its components.

### Spectral Bands

The spectrum has bands. In visible light, the bands are red, orange, yellow, green, blue, violet. In the framework, the bands are the Four Forces:

```
Mind band      — frequencies of intellect (strategy, research, analysis)
Form band      — frequencies of creation (engineering, architecture, design, craft)
Presence band  — frequencies of expression (communications, art, media)
Spirit band    — frequencies of animation (operations, governance, finance, law)
```

Forces are bands, not containers. A frequency can draw from multiple bands — education is Mind and Presence, healthcare is Spirit and Form. The bands are how the Architect understands what a field needs, not how the filesystem is organized.

---

## Rays

A ray is one frequency of the spectrum. One color in the rainbow. One data structure in a field.

Workers is a ray. Task Board is a ray. Menu Items is a ray. Each ray is one aspect of the field's light made individually observable.

A ray can be dispersed further. Pass the Workers ray through another prism (group by spectrum) and you see its own spectrum — Software Engineering, Strategy, Communications, Operations. Pass the Task Board ray through a prism (group by status) and you see — Not Started, In Progress, Done.

This is fractal. Every ray, examined closely, is itself light. It can be passed through another prism. Spectrums within spectrums. The same pattern at every scale.

---

## Lytes

A lyte is what a ray carries. One dimension of information. One attribute. Name, price, status, due date — each is a lyte.

Lyte is not just a column in a table. Lyte is the substance of information itself. The value that flows through the system. "Hummus Plate" is lyte. "Active" is lyte. "$12.00" is lyte.

Lyte is the most manifested form of prima. Prima → light → field → spectrum → ray → lyte → information. Each step is further manifestation. Each step reveals more of what was always there.

---

## Dark Matter

Some prima has not yet been revealed. Data exists in the database — tables, rows, columns — but no ray points at it. No prism has illuminated it. It is present, has weight, has relationships to other things — but it does not interact with light. It is invisible.

From the Laws: *"Where Lyte enters, darkness dissolves — not through force, but through presence. Darkness is not an opposing force. It is the absence of Lyte."*

Dark matter is not broken. It is not wrong. It is prima waiting to be illuminated. Creating a ray that points at a dark table is the act of illumination — the data becomes visible without changing. The prism is placed, light passes through, a new frequency appears in the spectrum.

---

## The Act of Creation

When a user says "I want to track bookings," this is what happens:

```
Prima (the field — all potential)
  ↓
Prism (the system) refracts
  ↓
A new ray manifests (Bookings — one frequency becomes visible)
  ↓
Lytes emerge (guest_name, check_in, check_out, status)
  ↓
Information flows (values fill the lytes)
  ↓
The spectrum grows (sidebar shows a new item)
```

Nothing was added to the field. A part of the field that was always implicit — the fact that this business has bookings — was made explicit. The ray revealed what was already there.

This is why the Guide asks questions. The Guide is not designing a field. The Guide is discovering what the field already is. The questions illuminate. The Architect builds the prisms. The Keeper records what was revealed.

---

## The Cycle Applied

Prima manifests through the Cycle — create, sustain, transform.

**Create:** A lyte is defined. A ray is born. A frequency appears in the spectrum. Data begins as JSONB in ray_entry — flexible, immediate, close to prima.

**Sustain:** The ray is used. Data accumulates. Patterns emerge. The JSONB structure proves itself across time and use. The lytes stabilize.

**Transform:** What was flexible crystallizes. The JSONB ray is promoted to a real Postgres table — typed columns, indexes, constraints. Prima fully manifested. The same data, more structured. The ray stays. The source changes. The user sees no difference.

```
JSONB (close to prima — flexible, immediate)
  → proven through use
Real table (fully manifested — typed, indexed, fast)
```

This is not an upgrade. It is manifestation. Prima becoming more visible, more structured, more real. The same Cycle that governs everything: knowledge becomes lessons becomes wisdom. Prima becomes JSONB becomes typed storage.

---

## The Source

Heart is the source of light. The human. Every field is a pursuit of the Heart. The framework does not create light — it refracts what the human brings.

A person's pursuits are their light. Their data, their knowledge, their intentions, their work — all light. The system takes that light and passes it through prisms so the human can see it, work with it, grow from it.

The Primordials (Guide, Architect, Keeper) are the first prisms. The Guide refracts the human's intent into questions. The Architect refracts the answers into structure. The Keeper refracts experience into memory. Together they manifest a field from prima — the human's undifferentiated potential shaped into workable form.

---

## Reading It Back

| Layer | Physics | Framework | Database |
|-------|---------|-----------|----------|
| Substance | Light | Lyte | The data itself |
| Potential | White light | Prima materia | A field before rays |
| Container | — | Field | `fields` table |
| Structure | Prism | The system | Prism + query builder |
| Visibility | Spectrum | Sidebar | `SELECT * FROM rays WHERE field_id = X` |
| Frequency | Ray | Data structure | `rays` table |
| Band | Color band | Force (Mind, Form, Presence, Spirit) | Analytical lens, not a table |
| Sub-spectrum | — | Spectrum (e.g., software-engineering) | `workers.spectrum` column |
| Dimension | — | Lyte | `lytes` table |
| Value | Wavelength | Information | Cell values |
| Invisible | Dark matter | Unilluminated data | Tables with no ray |
| Revealing | Illumination | Creating a ray | `INSERT INTO rays` |

---

## The Three Documents

```
prima.md    — what everything is made of and how it manifests (this document)
lyte.md     — the Laws that govern how it behaves
stack.md    — how to build with it operationally
```

Prima is the creation theory — why things are the way they are. Lyte is the constitution — the rules that hold. Stack is the manual — how to do the work.

A worker building a field reads stack.md. A worker designing a field reads prima.md. A worker understanding the framework reads lyte.md. The Architect reads all three.
