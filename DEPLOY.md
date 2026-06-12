# AeroSync BD — GitHub Pages Deployment

## 📁 File Structure

```
busniess/          ← Your project folder (rename if desired)
├── index.html     ← Main store (homepage)
├── admin.html     ← Admin panel
├── products.js    ← Shared product data
└── products/      ← Product images
    ├── logo.png
    ├── google-ai-pro-18m.png
    ├── google-ai-pro-1y.png
    ├── google-ai-pro-4m.png
    ├── chatgpt-shared.png
    ├── chatgpt-ownmail.png
    ├── chatgpt-personal.png
    ├── capcut-purple.png
    ├── capcut-blue.png
    └── canva-pro.png
```

## 🚀 Deploy to GitHub Pages (Step by Step)

### 1. Create a GitHub Repository
- Go to https://github.com/new
- Name it: `aerosync-store` (or any name)
- Set to **Public**
- Click "Create repository"

### 2. Upload Files
**Option A — GitHub Web UI (Easiest):**
1. In your new repo, click "uploading an existing file"
2. Drag-and-drop ALL files from your `/Desktop/busniess/` folder
3. Make sure to include the `products/` folder with all images
4. Click "Commit changes"

**Option B — Git CLI:**
```bash
cd /Users/ariyankhanoyon/Desktop/busniess
git init
git add .
git commit -m "Initial store deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aerosync-store.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repo **Settings** → **Pages**
2. Under "Source", select **Deploy from branch**
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes, then visit: `https://YOUR_USERNAME.github.io/aerosync-store/`

## ⚙️ Admin Panel
- Visit: `https://YOUR_USERNAME.github.io/aerosync-store/admin.html`
- Changes are saved in browser **localStorage** — they persist for each visitor's browser
- To make permanent changes that all visitors see: edit `products.js` and re-upload to GitHub

## 🔧 Managing Products
All product data is stored in `products.js`. You can:
1. Use `admin.html` to edit in-browser (changes stored locally)
2. Edit `products.js` directly for permanent global changes
3. Add new images to the `products/` folder and reference them in admin

## ⚠️ Notes
- The admin panel uses `localStorage` — changes only affect your browser unless you update `products.js`
- For a shared admin experience, you'd need a backend (contact developer)
- The store is fully static — no server required!
