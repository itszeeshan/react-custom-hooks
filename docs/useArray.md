# `useArray`

A hook for managing and manipulating an array with functions like push, filter, update, remove, and clear.

## Arguments

- `defaultValue` (`array`): The initial array value.

## Returns

- An array containing:
  - The current array value.
  - Functions to manipulate the array (`push`, `filter`, `update`, `remove`, `clear`).

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)

## How to Use

```js
import useArray from "./useArray"

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray([
        1, 2, 3, 4, 5, 6,
    ])

    return (
        <div>
            <div>{array.join(", ")}</div>
            <button onClick={() => push(7)}>Add 7</button>
            <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter(n => n < 3)}>
                Keep Numbers Less Than 4
            </button>
            <button onClick={() => set([1, 2])}>Set To 1, 2</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
```
