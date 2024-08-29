# `useAsync`

A hook to handle asynchronous tasks.

## Arguments

- `callback` (`function`): The asynchronous function to execute.
- `dependencies` (`array`, optional): Dependency array to control when the async function should be executed.

## Returns

- An object containing `data`, `error`, and `loading`.

## Hooks Involved
- [useState](https://react.dev/reference/react/useState)
- [useCallback](https://react.dev/reference/react/useCallback)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import useAsync from "./useAsync"

export default function AsyncComponent() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = false
            setTimeout(() => {
                success ? resolve("Hi") : reject("Error")
            }, 1000)
        })
    })

    return (
        <div>
            <div>Loading: {loading.toString()}</div>
            <div>{error}</div>
            <div>{value}</div>
        </div>
    )
}
```