# Skyline Web

A web conversion of the Skyline Android app. The web app preserves the original product concepts: authentication, home feed, stories, posts, comments/likes/saves, Lines short video surface, discovery/search, profiles, follows, messages/chat, notifications, settings, privacy/statistics controls, and region-aware content.

## Run
```bash
npm install
npm run dev
npm run build
```

Firebase is configured from the Android project's existing Firebase project. The UI has a demo mode so the application can be explored without authentication. Backend reads/writes use the original Realtime Database namespace under `skyline/*` where supported.
