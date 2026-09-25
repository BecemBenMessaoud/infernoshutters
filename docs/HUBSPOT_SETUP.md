# HubSpot setup (Inferno Shutters website)

This site sends **all form leads** to **Formspree** (email notifications) and **HubSpot CRM** (contacts + notes). Glenn’s tracking script is installed in `index.html` (portal `247352385`).

## What the website does automatically

After a successful form submit:

1. **Formspree** receives the submission (unchanged).
2. **HubSpot** creates or updates a **contact** by email and adds a **note** with the full form fields and form type (quote, contact, dealer, newsletter, etc.).

Forms covered:

- Request a Quote (page + modal)
- Contact
- Become a Dealer
- Reservation
- Installation assessment / service call / wholesale (service modals)
- Footer newsletter (no reCAPTCHA; still synced to HubSpot)

## Required: Vercel environment variable

| Variable | Description |
|----------|-------------|
| `HUBSPOT_PRIVATE_APP_TOKEN` | Private app access token (server-only, **never** expose to the browser) |

Without this token, submissions still go to Formspree but **will not** sync to HubSpot (API returns success with `hubspot: skipped` only when token is missing in dev; in production you should always set the token).

Existing variables still required for protected forms:

- `RECAPTCHA_SECRET_KEY`
- `VITE_RECAPTCHA_SITE_KEY`

After adding `HUBSPOT_PRIVATE_APP_TOKEN`, **redeploy** the Vercel project.

---

## Glenn / HubSpot admin checklist

### 1. Create a HubSpot private app

1. Log in to HubSpot → **Settings** (gear) → **Integrations** → **Private Apps**.
2. **Create a private app** (e.g. “Inferno Shutters Website”).
3. **Scopes** (minimum):
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.objects.notes.write`
   - `crm.objects.notes.read` (optional, for debugging)
4. Create the app and copy the **Access token**.
5. Send the token securely to your developer (or paste into Vercel yourself) as `HUBSPOT_PRIVATE_APP_TOKEN`.

### 2. Domains & tracking code

1. **Settings** → **Tracking & Analytics** → **Tracking code**.
2. Confirm portal ID **247352385** matches the script on the site.
3. Add / verify domains:
   - `www.infernoshutters.com`
   - `infernoshutters.com`

### 3. Verify CRM sync (after deploy)

1. Submit a **test quote** on the live site with a test email you control.
2. In HubSpot → **CRM** → **Contacts**, search for that email.
3. Open the contact → **Activity** / **Notes** — you should see a note titled with the form type and all field values.
4. Repeat for **newsletter** (footer) and **contact** form.

### 4. Sales & notifications (recommended)

1. **Settings** → **Users & Teams** — assign default **contact owners**.
2. **Automation** → **Workflows** — e.g. email sales when a new contact is created or when note contains “quote form”.
3. **Inbox** / **Conversations** — enable chat only if you want the HubSpot chat widget (optional; not required for form leads).

### 5. Privacy policy

Update the site **Privacy Policy** to mention HubSpot (analytics, cookies, CRM processing). Legal review if you serve EU/UK visitors (cookie consent may be required).

### 6. Optional: HubSpot marketing forms

The site keeps **your existing form design**. Leads are synced via API, not embedded HubSpot forms. If Glenn later wants native HubSpot form analytics per form, we can add **form GUID** mapping — not required for CRM contacts + notes.

---

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| Form works but user sees CRM error | Invalid/expired private app token or missing scopes |
| No contact in HubSpot | Token not set in Vercel Production or not redeployed |
| Contact created, no note | Missing `crm.objects.notes.write` scope |
| Duplicate contacts | Same email merges into one contact (by design) |

Check **Vercel** → **Deployments** → **Functions** → `api/submit-form` logs for HubSpot API errors.
