# Studio Constance website

Static, single-page site (no build step, no dependencies). Open `index.html` in a browser to preview.

## Structure
- `index.html`: all page content. Pages are sections switched by URL hash:
  `#home`, `#studio`, `#services`, `#portfolio`, `#project/<id>`, `#press`, `#inquire`.
- `css/styles.css`: all styles. Colors and fonts are CSS variables at the top of the file (`:root`).
- `js/main.js`: hash router, mobile menu, testimonial rotator, portfolio filter, inquiry form.
- `images/`: empty; put project photography here.

If you move the site onto a CMS (Squarespace, Webflow, WordPress), each `<div class="page" id="page-...">` block maps to one real page.

## Fonts
Google Fonts, loaded in `<head>`: Cormorant Garamond (headings) and Nunito Sans (body and navigation).
To change fonts, edit the `--serif` and `--sans` variables in `styles.css` and the Google Fonts link.

## Placeholder imagery
There are no photos yet. Every image area is a CSS "material" swatch: an element with a class like
`photo m-plaster`, `m-walnut`, `m-hinoki`, `m-travertine`, `m-slate`, `m-steel`, `m-linen`, `m-oxblood`, `m-marble`.
To swap in a photo, replace the class with a background image, or put an `<img>` inside the `<figure>`
with `width:100%; height:100%; object-fit:cover`.
The home hero is an inline SVG illustration; replace it with a full-bleed photograph.

## Content to replace before launch
- [ ] Hero photography (home and each page hero)
- [ ] Portrait of Constance Kang (home and The Studio)
- [ ] 6 press logos (home "As featured in" band)
- [ ] 6 press features (Press page: cover image, publication, headline, date, link)
- [ ] 3 client testimonials: `TESTIMONIALS` array at the top of `js/main.js`
- [ ] 6 portfolio projects: `PROJECTS` array at the top of `js/main.js` (name, location, type, description)
- [ ] Project gallery photos and photographer credit (project detail page)
- [ ] Phone number, studio address (Inquire page)
- [ ] Email: `hello@studioconstance.com` and `press@studioconstance.com` are placeholders
- [ ] Service area wording in the "Based in Cincinnati" block on the home page
- [ ] Investment ranges in the inquiry form dropdown

## Inquiry form
The form currently opens the visitor's email app with a pre-filled message to the studio address.
For production, connect it to a form service (Formspree, Netlify Forms, HubSpot, or the CMS's built-in forms)
in the `f-send` click handler near the bottom of `js/main.js`.

## Not yet included
- Favicon and social share image (Open Graph)
- Analytics
- Privacy policy page
