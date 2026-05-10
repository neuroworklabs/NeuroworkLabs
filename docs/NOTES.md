## Frontend setup with npm
1. Install npm and node in system globally. (Locally also works; specific to `web/` directory)
2. Create Next.js app with required features
```bash
npx create-next-app@latest .\
    --typescript \
    --app \
    --tailwind \
    --eslint \
    --src-dir \
    --import-alias "@/*"
```