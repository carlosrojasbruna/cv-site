# Carlos Rojas Bruna — Academic CV Site

## 🗂️ Structure

```
/
├── index.html          ← Renderer. Never edit for content.
├── data/
│   ├── profile.js       ← Bio, stats, research areas, current research
│   ├── education.js     ← Degrees
│   ├── experience.js    ← Work history
│   ├── publications.js  ← Journal articles, book chapters ← EDIT MOST OFTEN
│   ├── projects.js      ← Funded research projects
│   ├── conferences.js   ← Conference presentations
│   ├── collaborations.js← International fellowships & visits
│   ├── teaching.js      ← Current teaching
│   ├── service.js       ← Academic service
│   ├── certifications.js← Google cert and any future badges
│   └── portfolio.js     ← Data analytics case studies
└── README.md
```

---

## ✏️ How to update each section

### Add a new publication
Open `data/publications.js` and add a new object at the **top** of the array:

```js
{
  status: "published",      // "published" | "accepted" | "under-review"
  year: "2026",             // null if not yet published
  authors: "Rojas Bruna, C. E., & Co-Author, X.",
  title: "Your paper title here",
  venue: "Journal Name, Volume(Issue), Pages.",
  doi: "10.xxxx/xxxxx",     // null if no DOI yet
  type: "journal"           // "journal" | "book-chapter" | "conference-proc"
},
```

### Add a new conference presentation
Open `data/conferences.js` and add at the **top**:

```js
{
  year: "2026",
  title: "Your talk title",
  event: "Conference Name",
  location: "City, Country",
  status: "accepted",       // "upcoming" | "accepted" | "presented" | "under-review"
  note: null                // or "Funded by ..." for funding notes
},
```

### Add a new funded project
Open `data/projects.js` and add at the **top**:

```js
{
  year: "2026",
  title: "Project title",
  funder: "Funding agency · Institution",
  status: "awarded",        // "awarded" | "not-awarded"
  role: "pi"                // "pi" | "co-i" | "member"
},
```

### Add a new case study to your portfolio
Open `data/portfolio.js` and add at the **top**:

```js
{
  label: "Short category label",
  title: "Your case study title",
  description: "2–3 sentence description of what the project does.",
  url: "https://carlosrojasbruna.github.io/your-repo/",
  stats: [
    { value: "74", label: "courses" },
    { value: "469", label: "ILOs coded" }
  ],
  tools: ["Python", "Tableau", "Content Coding"]
},
```

### Add a new certification
Open `data/certifications.js` and add a new object. Update the `credlyUrl` to your real Credly badge URL.

### Update your Credly badge URL
Open `data/certifications.js` and replace:
```js
credlyUrl: "https://www.credly.com/badges/YOUR-BADGE-ID"
```
with your real Credly URL (find it on credly.com under your earned badges).

---

## 🚀 Deploy to GitHub Pages

1. Create a repository named `carlosrojasbruna.github.io` (or any repo name)
2. Upload all files maintaining the folder structure:
   ```
   index.html
   data/profile.js
   data/publications.js
   ... (all data files)
   ```
3. In GitHub: **Settings → Pages → Source: Deploy from branch `main`**
4. Your site will be live at `https://carlosrojasbruna.github.io`

> **Important:** The `data/` folder must be uploaded alongside `index.html`. GitHub Pages serves static files, so the folder structure matters.

---

## 🔧 Workflow for updates

```
1. Open the relevant data/*.js file in any text editor
2. Add your new entry at the top of the array
3. Save the file
4. Commit and push to GitHub
5. Site updates automatically in ~30 seconds
```

That's it — you never need to touch `index.html`.
