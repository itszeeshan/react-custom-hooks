# `useClickOutside`

A hook to detect clicks outside a specified element and trigger a callback.

## Arguments

- `ref` (`React.RefObject`): The ref object of the element to detect outside clicks.
- `callback` (`function`): The function to call when a click outside is detected.

## Returns

- None

## Hooks Involved

- [useEventListener](./useEventListener.md)

## How to Use

```js
import { useRef, useState } from "react"
import useClickOutside from "./useClickOutside"

export default function ClickOutsideComponent() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
    })

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <div
                ref={modalRef}
                style={{
                    display: open ? "block" : "none",
                    backgroundColor: "blue",
                    color: "white",
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    top: "calc(50% - 50px)",
                    left: "calc(50% - 50px)",
                }}
            >
                <span>Modal</span>
            </div>
        </>
    )
}
```
