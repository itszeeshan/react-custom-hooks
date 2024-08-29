# `useCookie`

A hook for managing cookies with get, set, and delete functionality.

## Arguments

- `name` (`string`): The name of the cookie.
- `defaultValue` (`string`): The initial value of the cookie.

## Returns

- An array containing:
  - The current cookie value.
  - Functions to set and delete the cookie.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useCallback](https://react.dev/reference/react/useCallback)

## Libraries Involves

- Cookies from `js-cookie`

## How to Use

```js
import useCookie from "./useCookie"

export default function CookieComponent() {
    const [value, update, remove] = useCookie("name", "John")

    return (
        <>
            <div>{value}</div>
            <button onClick={() => update("Sally")}>Change Name To Sally</button>
            <button onClick={remove}>Delete Name</button>
        </>
    )
}
```