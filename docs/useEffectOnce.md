# `useEffectOnce`

A hook to run an effect only once on mount.

## Arguments

- `callback` (`function`): The effect function to run once.

## Returns

- None

## Hooks Involved

- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import { useState } from "react"
import useEffectOnce from "./useEffectOnce"

export default function EffectOnceComponent() {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert("Hi"))

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}
```
