# `useTimeout`

A hook to manage a timeout with set, clear, and reset functionalities.

## Arguments

- `callback` (`function`): The function to call after the timeout.
- `delay` (`number`): The delay in milliseconds.

## Returns

- An object containing `reset` and `clear` functions.

## Hooks Involved

- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef)
- [useCallback](https://react.dev/reference/react/useCallback)

## How to Use

```js
import { useState } from "react"
import useTimeout from "./useTimeout"

export default function TimeoutComponent() {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}
```
