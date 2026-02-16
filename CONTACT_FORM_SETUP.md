# Contact Form – Email Setup (RESEND_API_KEY)

Jab tak **RESEND_API_KEY** add nahi karte, contact form submit par ye error aayega:  
*"Something went wrong. (Add RESEND_API_KEY in .env for email to work.)"*

---

## Step 1: Resend par API Key banao

1. Browser mein jao: **https://resend.com**
2. **Sign up** (Google/GitHub se ya email se).
3. Login ke baad **API Keys** section mein jao (left sidebar ya **API Keys** link).
4. **Create API Key** par click karo.
5. Name do (e.g. "Portfolio") → **Add**.
6. Jo key dikhe (`re_xxxxxxxx...`) use **copy** karo — ye sirf ek baar dikhegi.

---

## Step 2: Local (.env) mein add karo

1. Project root par `.env` file kholo (nahi hai to banao).
2. Is line ko add karo (apni key paste karo):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

3. File save karo.
4. Dev server restart karo: `npm run dev`.

Ab local par form submit karne par email **umerfarooqkk4@gmail.com** par aani chahiye.

---

## Step 3: Vercel (live site) par add karo

1. **vercel.com** → apna project open karo.
2. **Settings** → **Environment Variables**.
3. **Add** → **Name:** `RESEND_API_KEY`, **Value:** wahi key jo Step 1 mein copy ki thi.
4. **Production**, **Preview**, **Development** sab select karo → Save.
5. **Redeploy** karo (Deployments → latest → Redeploy).

Iske baad live site par bhi contact form se email aapke inbox par aayegi.

---

**Short:** Resend.com → Sign up → API Keys → Create → copy key → `.env` mein `RESEND_API_KEY=re_...` add karo → Vercel Environment Variables mein bhi same add karo.
