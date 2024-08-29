# `useUpdateEffect`

A hook to run an effect only on updates, not on the initial mount.

## Arguments

- `callback` (`function`): The function to call on updates.
- `dependencies` (`array`): The dependencies array for the effect.

## Returns

- `void`

## Hooks Involved

- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef)

## How to Use

```js
import { useState } from "react"
import useUpdateEffect from "./useUpdateEffect"

export default function UpdateEffectComponent() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
```
