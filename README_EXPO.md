# CRWN MVP — Expo quick start

This is a minimal Expo-compatible scaffold so you can open the app in Expo Go and view a simple two-screen flow (Home -> Details).

Quick steps (macOS, zsh):

1. Install dependencies and start Metro (use npm or yarn). If you don't have the Expo CLI installed globally, you can use npx.

```bash
# Install node modules
npm install

# Start the dev server
npx expo start
```

2. Open Expo Go on your device and scan the QR code shown by the dev server.

What this scaffold contains:

- `App.js` — minimal app + simple state-based navigation
- `src/screens/HomeScreen.js` — initial screen with a button
- `src/screens/DetailScreen.js` — details screen with back button
- `src/components/PrimaryButton.js` — small reusable button
- `app.json` and `package.json` — Expo configuration
- `.gitignore`

Next suggestions:

- Add real navigation (React Navigation) for production.
- Add assets (icons, images) in `assets/`.
- Add TypeScript or tests as needed.
