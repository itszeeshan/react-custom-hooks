# `useDarkMode`

A hook to manage dark mode state and apply dark mode styling based on user preference and localStorage.

## Arguments

- None

## Returns

- An array containing:
  - A boolean indicating if dark mode is enabled.
  - A function to toggle dark mode.

## Hooks Involved

- [useLocalStorage](./useLocalStorage.md)
- [useMediaQuery](./useMediaQuery.md)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
/* body.css file:
body.dark-mode {
    background-color: #333;
}
*/

import useDarkMode from "./useDarkMode"
import "./body.css"

export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <button
            onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
            style={{
                border: `1px solid ${darkMode ? "white" : "black"}`,
                background: "none",
                color: darkMode ? "white" : "black",
            }}
        >
            Toggle Dark Mode
        </button>
    )
}
```
