# `useDebugInformation`

A hook to provide debugging information, including render count and changed props.

## Arguments

- `componentName` (`string`): The name of the component for debugging.
- `props` (`object`): The current props of the component.

## Returns

- An object containing:
  - `count`: The number of times the component has rendered.
  - `changedProps`: An object detailing the props that have changed.
  - `timeSinceLastRender`: The time in milliseconds since the last render.
  - `lastRenderTimestamp`: The timestamp of the last render.

## Hooks Involved

- [useRenderCount](./useRenderCount.md)
- [useRef](https://react.dev/reference/react/useRef)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import useDebugInformation from "./useDebugInformation"
import useToggle from "../useToggle/useToggle"
import { useState } from "react"

export default function DebugInformationComponent() {
    const [boolean, toggle] = useToggle(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent boolean={boolean} count={count} />
            <button onClick={toggle}>Toggle</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Increment
            </button>
        </>
    )
}

function ChildComponent(props) {
    const info = useDebugInformation("ChildComponent", props)

    return (
        <>
            <div>{props.boolean.toString()}</div>
            <div>{props.count}</div>
            <div>{JSON.stringify(info, null, 2)}</div>
        </>
    )
}
```
