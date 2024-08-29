# `useEventListener`

A hook to add an event listener to a specified element and clean up on unmount.

## Arguments

- `eventType` (`string`): The type of event to listen for (e.g., `"click"`, `"resize"`).
- `callback` (`function`): The function to call when the event is triggered.
- `element` (`object`): The target element to attach the event listener to. Defaults to `window` if not provided.

## Returns

- `void`

## Hooks Involved

- [useRef](https://react.dev/reference/react/useRef)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import { useState } from "react"
import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
    const [key, setKey] = useState("")
    useEventListener("keydown", e => {
        setKey(e.key)
    })

    return <div>Last Key: {key}</div>
}
```

