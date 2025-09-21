# React Quiz App

A lightweight quiz application built with React 19 and Vite. It fetches questions from the Open Trivia DB, lets users select answers, check results, and replay.

## Features

- Fetches quiz questions from an external API
- Shuffled answer choices per question
- Displays score and supports replaying the quiz
- Clean components structure: `StartPage`, `QuizPage`, `Question`

## Tech Stack

- **React 19** (Vite + @vitejs/plugin-react)
- **Vite 7** for fast dev/build
- **ESLint** for linting
- **clsx** and **html-entities** for UI state & decoding

## Getting Started

### Prerequisites

- **Node.js**: 18+ recommended (LTS)
- **npm**: 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the printed local URL from the terminal.

### Build

```bash
npm run build
```

### Preview (after build)

```bash
npm run preview
```

## Project Structure

```
react-quiz-app/
├─ public/
│  └─ images/
│     └─ favicon.png
├─ src/
│  ├─ Components/
│  │  ├─ Question.jsx
│  │  ├─ QuizPage.jsx
│  │  └─ StartPage.jsx
│  ├─ assets/
│  │  ├─ blob-bottom-left.png
│  │  └─ blob-top-right.png
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

## Accessibility

- Keyboard-accessible buttons
- Clear states for selected, correct, and wrong answers (CSS classes)

## Notes

- Favicon served from `public/images/favicon.png`.
- If deploying under a sub-path, confirm asset paths (e.g., `/images/...`) are correct.

## License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/ahz777/react-quiz-app/blob/main/LICENSE) file for details.
