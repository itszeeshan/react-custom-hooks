# `useDebounce`

A hook to debounce a callback function with a specified delay.

## Arguments

- `callback` (`function`): The function to debounce.
- `delay` (`number`): The debounce delay in milliseconds.
- `dependencies` (`array`): The dependencies for the effect.

## Returns

- None

## Hooks Involved

- [useTimeout](./useTimeout.md)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import { useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
```
