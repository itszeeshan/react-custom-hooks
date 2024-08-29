# `useHover`

A hook to track whether an element is being hovered over.

## Arguments

- `ref` (`React.RefObject`): The ref object of the element to detect hover.

## Returns

- A boolean indicating if the element is being hovered.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useEventListener](./useEventListener.md)

## How to Use

```js
import { useRef } from "react"
import useHover from "./useHover"

export default function HoverComponent() {
    const elementRef = useRef()
    const hovered = useHover(elementRef)

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: hovered ? "blue" : "red",
                width: "100px",
                height: "100px",
                position: "absolute",
                top: "calc(50% - 50px)",
                left: "calc(50% - 50px)",
            }}
        />
    )
}
```
