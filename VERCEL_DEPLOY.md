# Vercel par Deploy – Step by Step

GitHub par code already push ho chuka hai. Ab sirf Vercel connect karna hai.

---

## Step 1: Vercel par login

1. Browser mein jao: **https://vercel.com**
2. **Log in** par click karo
3. **Continue with GitHub** choose karo (taake GitHub repo direct link ho jaye)
4. Agar pehle se GitHub link hai to allow karo, warna GitHub se authorize karo

---

## Step 2: Naya project add karo

1. Vercel dashboard par **Add New...** → **Project** par click karo
2. **Import Git Repository** section mein apna repo dikhega
3. **`umerfarooque00786/next-js-updated-portfolio`** ke samne **Import** par click karo

---

## Step 3: Project settings (important)

1. **Project Name** – jo bhi naam chaho (e.g. `umer-portfolio`) rakh sakte ho
2. **Framework Preset** – **Next.js** auto detect ho jana chahiye
3. **Root Directory** – khali chhod do (default `./`)
4. **Build Command** – `npm run build` (default)
5. **Output Directory** – khali (Next.js default use karega)

### Production branch

6. **Production Branch** dropdown open karo
7. **`deployment`** select karo  
   → Isse jab bhi `deployment` branch par push karoge, tab hi **live site** update hogi.

---

## Step 4: Environment Variables (build ke liye zaroori)

**Build pass karne ke liye** Vercel par ye variable add karo:

1. **Environment Variables** section mein **Add** click karo.
2. **Name:** `DATABASE_URL`
3. **Value:** `file:./dev.db` (build ke liye placeholder – local SQLite format)
4. **Environment:** **Production**, **Preview**, **Development** teeno select karo (taake har build chal jaye).

Save karo. Isse `prisma generate` build time par chal jayega aur build fail nahi hogi.

(Baad mein agar Sign Up/Login live karna ho to production ke liye real database (e.g. Vercel Postgres, Neon) set karna padega.)

Agar **Sign Up / Login** abhi live par use nahi karna:

- Sirf **DATABASE_URL** (upar wala) add karo, phir **Deploy** karo.  
- Portfolio, projects, contact sab chal jayega. Auth wale pages par error aa sakta hai.

Agar **auth bhi live** chahiye (Sign Up / Login):

- **Environment Variables** section mein **Add** karo:

| Name             | Value (example)                    | Notes                    |
|------------------|-------------------------------------|---------------------------|
| `DATABASE_URL`   | `postgres://...` ya hosted DB URL   | Vercel/Neon/PlanetScale  |
| `NEXTAUTH_SECRET`| koi random long string              | [generate](https://generate-secret.vercel.app) |
| `NEXTAUTH_URL`   | `https://your-site.vercel.app`      | Deploy ke baad actual URL |

**Note:** Abhi SQLite use ho raha hai; Vercel par SQLite file nahi chalti. Production auth ke liye baad mein PostgreSQL (Vercel Postgres / Neon) set karna padega.

---

## Step 5: Deploy

1. **Deploy** button par click karo
2. 1–2 minute wait karo
3. Jab **Congratulations** dikhe, **Visit** par click karo
4. Aapki site live URL par khul jayegi (e.g. `https://next-js-updated-portfolio.vercel.app`)

---

## Aage kaam (optional)

- **Custom domain:** Project → **Settings** → **Domains** se apna domain add kar sakte ho
- **Live update:** Jab bhi `deployment` branch par push karoge, Vercel automatic naya deploy kar dega

---

## Short summary

1. vercel.com → **Log in** (GitHub)
2. **Add New** → **Project** → repo **next-js-updated-portfolio** → **Import**
3. **Production Branch** = **deployment** select karo
4. **Deploy** click karo
5. Deploy complete hone par **Visit** se site kholo

Done.
