# To Be Fixed — React Quiz App

## High Priority

1. Prevent infinite retry loop on fetch

- Limit retries (e.g., 3–5) with exponential backoff
- Show error UI and a manual "Retry" button

2. ~~Correct results styling logic~~

- ~~Avoid fading out the correct answer when a wrong selection was made~~
- ~~Apply `incorrect` only to answers that are neither the correct answer nor the selected one~~

3. Add fetch cleanup and unmount safety

- Use `AbortController`
- Cancel in `useEffect` cleanup to avoid setting state on unmounted components

## Medium Priority

4. Unbiased answer shuffling

- Replace `sort(() => Math.random() - 0.5)` with Fisher–Yates shuffle

5. Validation before checking answers

- Disable "Check Answers" until every question has a `selected_answer`

6. Stable IDs/keys

- Avoid using array index for `id` and React `key`
- Use a stable id (e.g., hash of question text + correct answer)

7. ~~Loading vs. stale UI~~

- ~~Add `isLoading` for initial and replay fetches~~
- ~~Hide old questions until new data is ready~~

## UI/UX & Accessibility

8. Accessibility improvements

- ~~Add `type="button"` to all action/answer buttons~~
- Use `aria-pressed` for selected states
- Add `aria-live="polite"` for loading and error messages

9. Responsive layout

- Replace fixed width container with responsive layout and breakpoints for mobile

10. ~~Visual clarity on results~~

- ~~Ensure styles for `selected`, `correct`, `wrong`, and `neutral` do not conflict~~

## Code Quality

11. ~~StrictMode~~

- ~~Re-enable `<StrictMode>` in development~~

12. ~~ESLint hooks/exhaustive-deps~~

- ~~Move `fetchQuestions` inside `useEffect` or wrap with `useCallback` and include in deps~~

13. ~~Equality checks~~

- ~~Use `===` instead of `==`~~

14. ~~Clearer prop names~~

- ~~`StartPage` — rename `onClick` → `onStart`~~

15. Types

- Add `prop-types` or migrate to TypeScript

## Build/Tooling

16. ~~Asset paths~~

- ~~Consider `/images/favicon.png` for Vite public assets (consistent base path)~~

17. ~~Fonts optimization~~

- ~~Remove duplicate preconnects~~
- ~~Combine font families into a single Google Fonts request if possible~~

18. ~~Formatting~~

- ~~Add Prettier for consistent formatting~~

19. Engines

- Add `"engines"` in `package.json` to document Node support

## Resilience

20. API config and edge cases

- Move API URL and amount to `.env`
- Handle empty/invalid API responses with user-friendly messages

## Styling/CSS

21. Background blobs

- Prefer CSS background images over `content: url(...)` pseudo-elements to reduce layout shifts

22. ~~Box-sizing~~

- ~~Add a global rule: `*, *::before, *::after { box-sizing: border-box; }`~~
