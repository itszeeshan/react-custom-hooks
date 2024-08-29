# `useLongPress`

A hook to detect long press interactions on an element.

## Arguments

- `ref` (`React.RefObject`): A reference to the element to detect long press on.
- `cb` (`function`): The callback function to call on long press.
- `options` (`object`, optional): Configuration options.
  - `delay` (`number`): The delay in milliseconds before triggering the long press.

## Returns

- `void`

## Hooks Involved

- [useTimeout](./useTimeout.md)
- [useEventListener](./useEventListener.md)
- [useEffectOnce](./useEffectOnce.md)

## How to Use

```js
import { useRef } from "react"
import useLongPress from "./useLongPress"

export default function LongPressComponent() {
    const elementRef = useRef()
    useLongPress(elementRef, () => alert("Long Press"))

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: "red",
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
