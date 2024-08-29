# `useMediaQuery`

A hook to detect whether a media query matches.

## Arguments

- `mediaQuery` (`string`): The media query string to match.

## Returns

- A boolean indicating if the media query matches.

## Hooks Involved

- [useEventListener](./useEventListener.md)
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import useMediaQuery from "./useMediaQuery"

export default function MediaQueryComponent() {
    const isLarge = useMediaQuery("(min-width: 200px)")

    return <div>Large: {isLarge.toString()}</div>
}
```
