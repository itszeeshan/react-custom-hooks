# `useWindowSize`

A hook to track the window size and update on resize events.

## Arguments

- None

## Returns

- `windowSize` (`object`): An object containing `width` and `height` of the window.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useEventListener](./useEventListener.md)

## How to Use

```js
import useWindowSize from "./useWindowSize"

export default function WindowSizeComponent() {
    const { width, height } = useWindowSize()

    return (
        <div>
            {width} x {height}
        </div>
    )
}
```
