# Excel Ace Portfolio

개인 웹 포트폴리오 사이트입니다.

## 🚀 배포된 사이트

**Live URL**: https://[your-username].github.io/excel-ace-port/

## 📋 프로젝트 정보

**Repository**: excel-ace-port

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/06089328-b460-4a7b-99fb-99877d1473c0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🚀 배포 방법

### GitHub Actions를 통한 자동 배포

1. **GitHub Pages 설정**:
   - Repository Settings > Pages > Source를 "GitHub Actions"로 설정
   - main 브랜치에 push하면 자동으로 배포됩니다

2. **수동 배포**:
   ```bash
   npm run deploy
   ```

3. **로컬 개발**:
   ```bash
   npm run dev
   ```

### 배포 설정

- **빌드 명령어**: `npm run build:prod`
- **배포 디렉토리**: `dist/`
- **Base URL**: `/excel-ace-port/` (GitHub Pages용)

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Actions + GitHub Pages
