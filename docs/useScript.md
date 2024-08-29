# `useScript`

A hook to dynamically load a script and handle its loading state.

## Arguments

- `url` (`string`): The URL of the script to load.

## Returns

- A promise that resolves when the script is loaded or rejects on error.

## Hooks Involved

- [useAsync](./useAsync.md)

## How to Use

```js
import useScript from "./useScript"

export default function ScriptComponent() {
    const { loading, error } = useScript(
        "https://code.jquery.com/jquery-3.6.0.min.js"
    )

    if (loading) return <div>Loading</div>
    if (error) return <div>Error</div>
    return <div>{window.$(window).width()}</div>
}
```
