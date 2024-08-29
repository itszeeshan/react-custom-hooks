# `useToggle`

A hook to toggle a boolean value.

## Arguments

- `defaultValue` (`boolean`): The initial boolean value.

## Returns

- An array containing:
  - The current boolean value.
  - A function to toggle the value.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)

## How to Use

```js
import useToggle from "./useToggle"

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    )
}
```
