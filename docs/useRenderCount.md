# `useRenderCount`

A hook to count the number of times a component has rendered.

## Arguments

- None

## Returns

- The number of times the component has rendered.

## Hooks Involved

- [useRef](https://react.dev/reference/react/useRef)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import useRenderCount from "./useRenderCount"
import useToggle from "../useToggle/useToggle"

export default function RenderCountComponent() {
    const [boolean, toggle] = useToggle(false)

    const renderCount = useRenderCount()

    return (
        <>
            <div>{boolean.toString()}</div>
            <div>{renderCount}</div>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}
```