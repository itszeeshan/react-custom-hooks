# `usePrevious`

A hook to keep track of the previous value of a state or prop.

## Arguments

- `value` (`any`): The current value to track.

## Returns

- The previous value of the state or prop.

## Hooks Involved

- [useRef](https://react.dev/reference/react/useRef)

## How to Use

```js
import { useState } from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Sergey")
    const previousCount = usePrevious(count)

    return (
        <div>
            <div>
                {count} - {previousCount}
            </div>
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}
```
