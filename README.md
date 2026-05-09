# Sara Spinosa — Personal Trainer Website

Static, fast-loading website for Sara Spinosa, a personal trainer based in New Orleans, LA.

## Pages

- `index.html` — Home, intro video, services overview, testimonials
- `about.html` — Bio, credentials, full client reviews
- `workouts.html` — Filterable workout video library
- `blog.html` — Article previews
- `contact.html` — Coaching application form

## How to view

Just double-click `index.html` to open in a browser, or run a local server:

```powershell
# From this folder, in PowerShell
python -m http.server 8000
# Then visit http://localhost:8000
```

## Customizing

### Replace placeholders

- **Intro video** — drop your video file at `assets/intro-video.mp4` (the `<video>` tag on the home page already points there). Or replace the `<video>` element with a YouTube/Vimeo `<iframe>` embed.
- **Profile photo** — in `about.html`, replace the `<div class="profile-image">SS</div>` block with an `<img src="assets/sara.jpg" alt="Sara Spinosa" class="profile-image">` and adjust the CSS if needed.
- **Workout video thumbnails** — in `workouts.html`, replace each `<div class="video-thumb">…</div>` with an `<img>` or a YouTube/Vimeo embed. You can also link each card to a video page or external video.
- **Social links** — find the `https://instagram.com`, `https://tiktok.com`, `https://facebook.com` URLs in each page's footer and replace with Sara's real handles.
- **Email** — replace `hello@saraspinosa.com` everywhere with the real email.
- **Reviews** — names and quotes in `about.html` are placeholders; swap in real client testimonials.
- **Blog posts** — the cards on `blog.html` link to `#` placeholders. When real posts exist, point each link at its article page.

### Wire up the contact form

The form on `contact.html` is already wired to **Formspree** — you just need to plug in your form ID. **One-time setup (~2 minutes, free, no credit card):**

1. Go to https://formspree.io and sign up with `trevsp27@gmail.com`.
2. Create a new form (name it "Sara Coaching Application").
3. Copy the endpoint Formspree gives you — it looks like `https://formspree.io/f/abcd1234`.
4. In `contact.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with your real ID (e.g. `abcd1234`).
5. Submit the form once and click the confirmation link Formspree emails you.

Every application from then on will arrive in your Gmail inbox automatically — the customer just clicks Submit and sees the success message; nothing opens on their end.

Free tier = 50 submissions/month, which is plenty for a coaching site.

Until you set up Formspree, the form will gracefully fall back to opening the customer's email client with the info pre-filled (mailto), so it still works in the meantime.

## Hosting (free options)

- **Netlify Drop** — drag the folder to https://app.netlify.com/drop
- **GitHub Pages** — push the folder to a GitHub repo and enable Pages
- **Cloudflare Pages** — connect the repo for auto-deploys

## Tech

- Pure HTML, CSS, and a tiny bit of vanilla JS — no build step, no dependencies.
- Google Fonts (Playfair Display + Inter) loaded from CDN.
- Fully responsive, dark theme with warm coral/gold accents.
