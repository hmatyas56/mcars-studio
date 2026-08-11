<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e0d555f8-1f47-4848-b024-3cdf4edef272

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Meta Pixel

Base kód pixelu je v `index.html` – před nasazením nahraďte `PIXEL_ID_ZDE` skutečným Pixel ID (2 výskyty).
Konverzní eventy: `Lead` (odeslání formuláře, `components/FormSection.tsx`), `Contact` (klik na telefon, `components/FloatingPhone.tsx`) – wrapper v `lib/tracking.ts`.
