# `useOnlineStatus`

A hook to detect the online/offline status of the browser.

## Arguments

- None

## Returns

- A boolean indicating if the browser is online.

## Hooks Involved

- [useEventListener](./useEventListener.md)
- [useState](https://react.dev/reference/react/useState)

## How to Use

```js
import useOnlineStatus from "./useOnlineStatus"

export default function OnlineStatusComponent() {
    const online = useOnlineStatus()

    return <div>{online.toString()}</div>
}
```
