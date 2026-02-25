# JC Reyes Pediatrics Static Site

## Pages
- Home: `index.html`
- About: `about.html`
- Services landing: `services/index.html`
- Service details:
  - `services/well-child-visits.html`
  - `services/same-day-sick-visits.html`
  - `services/immunizations.html`
  - `services/school-sports-physicals.html`
- Patient Forms & Resources: `patient-forms.html`
- Contact & Location: `contact.html`
- Request an Appointment: `request-appointment.html`
- Privacy Notice: `privacy.html`
- Accessibility Statement: `accessibility.html`

## Run Locally
- Option 1: Open `index.html` directly in a browser.
- Option 2: Use a simple local server:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository and push this folder.
2. In GitHub, go to **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and root folder (`/`).
5. Save. Your site will be published at the provided GitHub Pages URL.

## Custom Domain (High Level)
1. Purchase a domain from a registrar.
2. In GitHub Pages settings, add the custom domain and follow the DNS instructions.
3. Update DNS with an `A` record or `CNAME` based on GitHub’s guidance.
4. Enable HTTPS in the Pages settings.

## Replace Images (Required)
Do not hotlink images from Facebook. Download photos you own or have permission to use and save them into `assets/images/` with the exact filenames below:
- `assets/images/hero.jpg`
- `assets/images/clinic-front.jpg`
- `assets/images/kids-1.jpg`
- `assets/images/kids-2.jpg`
- `assets/images/team.jpg`

Update the `srcset` values if you provide higher-resolution versions (example: `hero@2x.jpg`).

## Replace Forms
Place PDF versions of your forms in `assets/forms/` and update the links on `patient-forms.html` if filenames change. Current placeholders are `.txt` files:
- `assets/forms/new-patient-registration.txt`
- `assets/forms/immunization-records-request.txt`
- `assets/forms/school-physical-form.txt`

## Form Handling + HIPAA Note
The appointment request form is static and does not submit data anywhere. It only logs a JSON object to the browser console for demonstration.

If you want to accept real appointment requests, connect the form to a HIPAA-compliant scheduling or patient portal vendor. Do not store protected health information in GitHub Pages or public repositories.

## Image Performance
For best performance, export optimized images and update `srcset` attributes. Example:
```html
<img src="assets/images/hero.jpg" srcset="assets/images/hero.jpg 1x, assets/images/hero@2x.jpg 2x" alt="..." />
```
