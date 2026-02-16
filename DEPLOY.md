# Deploy Guide – GitHub + Vercel

## Branches

| Branch        | Use                          | Vercel        |
|---------------|------------------------------|---------------|
| **development** | Daily coding, features, fixes | Preview URLs  |
| **deployment**  | Production-ready code         | **Production (live)** |

## 1. Push code to GitHub (first time)

Repo is empty. Push your current code with both branches:

```bash
# Add all & commit if needed
git add .
git commit -m "Initial: portfolio with CI/CD and deployment setup"

# Create development branch (your main working branch)
git branch development
git checkout development

# Push development
git push -u origin development

# Create deployment from development (for production)
git branch deployment
git push -u origin deployment
```

Agar pehle se `master` par kaam hai, to deployment ko production ke liye use karein:

```bash
git checkout master
git branch development
git push -u origin development
git branch deployment
git push -u origin deployment
```

## 2. Connect Vercel

1. [vercel.com](https://vercel.com) → Sign in (GitHub).
2. **Add New Project** → **Import** `umerfarooque00786/next-js-updated-portfolio`.
3. **Production Branch:** `deployment` select karein (taake sirf `deployment` push par live deploy ho).
4. **Environment Variables** (agar project mein use ho rahe hon):
   - `DATABASE_URL` (Prisma)
   - `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (Next Auth)
   - Vercel ke **Settings → Environment Variables** se add karein.
5. **Deploy** click karein.

Iske baad:

- **Production:** `deployment` branch par push → Vercel automatic production deploy karega.
- **Preview:** `development` (ya koi bhi branch) par push → Vercel preview URL dega.

## 3. Daily workflow

- **Development:**  
  - Hamesha `development` par commit/push karein.  
  - CI pipeline (`.github/workflows/ci.yml`) automatically build + lint chalega.

- **Live release:**  
  - Jab release deni ho:
    ```bash
    git checkout deployment
    git merge development
    git push origin deployment
    ```
  - Vercel `deployment` branch se production deploy kar dega.

## 4. CI pipeline (GitHub Actions)

- **Trigger:** Push ya Pull Request on `development` ya `deployment`.
- **Steps:** `npm ci` → `prisma generate` → `next lint` → `next build`.
- Status: GitHub repo → **Actions** tab.

Fail hone par Actions me logs dekh kar error fix karein, phir wapas push karein.
