
# ci-node-lab

![Build Status](https://github.com/frankischilling/ci-node-lab/actions/workflows/ci.yml/badge.svg)

## 📖 Overview
This is a tiny **Node.js utility library** built for learning CI/CD with **GitHub Actions**.  
It demonstrates:
- Math helpers: `sum`, `subtract`, `multiply`, `divide`, `average`, `clamp`, `isEven`
- String helper: `toTitleCase`
- Async helper: `delaySum` (pretends to do async work)
- A tiny CLI (`calc`) to do add/sub/mul/div from the command line
- Unit tests written with [Jest](https://jestjs.io/) to cover sync + async code

Each push to `main` runs tests automatically using GitHub Actions.  
The badge above shows the current build status ✅/❌.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
````

### 2. Run Tests

```bash
npm test
```

Optional with coverage:

```bash
npm run test:coverage
```

### 3. Use the CLI

```bash
node bin/calc.js add 2 3
# → 5
```

---

## 🛠 CI/CD Workflow

This repo includes a GitHub Actions workflow under `.github/workflows/ci.yml`.
It runs automatically on:

* Pushes to `main`
* Pull requests targeting `main`

Steps:

1. Check out the code
2. Set up Node.js (LTS)
3. Install dependencies (`npm ci`)
4. Run tests (`npm test -- --ci`)

---

## 📸 Screenshots for Lab

* ✅ Passing workflow run
* ❌ Failing workflow run (from intentionally broken test)
* README showing this badge

---

## 📚 Learnings

This project demonstrates the full CI loop:

* **Push → Test → Fix → Push again**
* Reading CI logs to troubleshoot failures
* Displaying build status with a badge for instant feedback

````

---

### How to Use
1. Create a new `README.md` file in your repo root.  
2. Paste this content.  
3. Replace the badge URL with the one GitHub gives you:
   - Go to **Actions → Node CI → ⋯ → Create status badge → Copy Markdown**
   - Replace the placeholder URL in the file.
4. Commit and push:

```bash
git add README.md
git commit -m "docs: add README with CI badge"
git push
````