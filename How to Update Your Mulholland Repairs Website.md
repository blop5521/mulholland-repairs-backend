# How to Update Your Mulholland Repairs Website

## Overview

Your website is built with modern technologies that make it easy to update. Here are the different ways you can make changes, from simple to more advanced.

## Quick Changes (No Technical Skills Required)

### 1. Text Content Updates

**What you can change**: Business hours, contact info, service descriptions, prices, etc.

**How to do it**:
1. Open the website files in any text editor (even Notepad works)
2. Look for the text you want to change in the HTML files
3. Make your changes and save
4. Re-upload the files to your hosting service

**Example**: To change your phone number:
- Find `(555) 123-4567` in the files
- Replace with your actual number
- Save and upload

### 2. Contact Information

**Files to edit**:
- `src/pages/ContactPage.jsx` - Main contact page
- `src/pages/AboutPage.jsx` - About page location info
- `src/components/Footer.jsx` - Footer contact details

### 3. Business Hours

**File to edit**: `src/pages/ContactPage.jsx`
Look for the "Workshop Hours" section and update as needed.

## Medium Changes (Basic Computer Skills)

### 1. Adding New Services

**File to edit**: `src/pages/HomePage.jsx`
1. Find the "Our Specialized Services" section
2. Copy an existing service card
3. Update the text, icon, and description
4. Save and rebuild the site

### 2. Updating Prices or Service Details

**Files to edit**:
- `src/pages/RepairPage.jsx` - Repair services
- `src/pages/SurfboardShowersPage.jsx` - Shower options
- `src/pages/HighVoltageArtPage.jsx` - Art services

### 3. Social Media Links

**File to edit**: `src/components/Footer.jsx`
Update the Instagram and Facebook links to point to your actual accounts.

## Advanced Changes (Some Technical Knowledge)

### 1. Adding New Pages

1. Create a new file in `src/pages/` (copy an existing page as template)
2. Update `src/App.jsx` to add the new route
3. Add navigation links in `src/components/Navigation.jsx`

### 2. Changing Colors/Styling

Your site uses Tailwind CSS classes. Common changes:
- `bg-blue-600` = blue background
- `text-gray-900` = dark gray text
- `hover:bg-blue-700` = darker blue on hover

### 3. Form Modifications

**Files to edit**:
- `src/pages/RepairPage.jsx` - Repair form
- `src/pages/SurfboardShowersPage.jsx` - Shower form
- `src/pages/HighVoltageArtPage.jsx` - Art form
- `app.py` - Backend form handling

## Tools You'll Need

### For Simple Changes:
- **Text Editor**: Notepad++ (Windows), TextEdit (Mac), or VS Code
- **File Transfer**: FileZilla or your hosting provider's file manager

### For Advanced Changes:
- **Code Editor**: VS Code (free, highly recommended)
- **Node.js**: For rebuilding the React frontend
- **Git**: For version control (optional but recommended)

## Step-by-Step Update Process

### Method 1: Direct File Editing (Simple Changes)

1. **Download** your current website files from your hosting service
2. **Edit** the files using a text editor
3. **Test** locally if possible
4. **Upload** the changed files back to your hosting service

### Method 2: Full Development Setup (Advanced Changes)

1. **Install Node.js** from nodejs.org
2. **Install VS Code** from code.visualstudio.com
3. **Open** the project folder in VS Code
4. **Make changes** to the React components
5. **Build** the project: `npm run build`
6. **Upload** the new `dist` folder contents to your hosting

## Common Update Scenarios

### Scenario 1: Change Business Hours
**File**: `src/pages/ContactPage.jsx`
**Look for**: "Workshop Hours"
**Change**: Update the text to your actual hours

### Scenario 2: Add New Repair Service
**File**: `src/pages/RepairPage.jsx`
**Look for**: "Equipment We Service" section
**Change**: Copy an existing service card and modify

### Scenario 3: Update Contact Phone Number
**Files**: Multiple files contain contact info
**Search for**: "(555) 123-4567"
**Replace**: With your actual number

### Scenario 4: Change Surfboard Shower Options
**File**: `src/pages/SurfboardShowersPage.jsx`
**Look for**: Valve options, wood types, or shapes
**Change**: Modify the arrays with your actual options

## Safety Tips

1. **Always backup** your files before making changes
2. **Test changes** on a staging site first if possible
3. **Make small changes** one at a time
4. **Keep notes** of what you changed
5. **Use version control** (Git) for larger projects

## When to Get Help

**Call for help when**:
- Adding complex new features
- Integrating with new services
- Major design overhauls
- Database or backend changes
- Performance optimization

**You can handle**:
- Text content updates
- Contact information changes
- Adding/removing services
- Basic styling tweaks
- Image replacements

## File Structure Reference

```
Your Website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx     # Top menu
│   │   └── Footer.jsx         # Bottom footer
│   └── pages/
│       ├── HomePage.jsx       # Main landing page
│       ├── RepairPage.jsx     # Repair services
│       ├── SurfboardShowersPage.jsx  # Shower orders
│       ├── HighVoltageArtPage.jsx    # Art commissions
│       ├── AboutPage.jsx      # About us
│       └── ContactPage.jsx    # Contact info
├── app.py                     # Backend server
└── dist/                      # Built files for hosting
```

## Quick Reference: Common Changes

| What to Change | File to Edit | What to Look For |
|----------------|--------------|------------------|
| Phone number | Multiple files | `(555) 123-4567` |
| Address | ContactPage.jsx, AboutPage.jsx | `72 Coffin Ave` |
| Business hours | ContactPage.jsx | `Workshop Hours` |
| Services offered | HomePage.jsx | `Our Specialized Services` |
| Social media | Footer.jsx | Instagram/Facebook links |
| Repair types | RepairPage.jsx | `Equipment We Service` |
| Shower options | SurfboardShowersPage.jsx | Valve/wood/shape options |

## Getting Started

1. **Download VS Code** (free code editor)
2. **Open your website folder** in VS Code
3. **Start with simple text changes** to get comfortable
4. **Use the search function** (Ctrl+F) to find text you want to change
5. **Save often** and keep backups

Remember: Your website is designed to be maintainable. Start with small changes and work your way up to more complex modifications as you get comfortable with the code structure!

