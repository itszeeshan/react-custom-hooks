# `useGeolocation`

A hook to get and watch the user's geolocation.

## Arguments

- `options` (`GeolocationOptions`): Options for the geolocation request.

## Returns

- An object containing:
  - `loading`: A boolean indicating if the geolocation request is in progress.
  - `error`: An error object if an error occurred.
  - `data`: The geolocation data (`coords`).

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
    const {
        loading,
        error,
        data: { latitude, longitude },
    } = useGeolocation()

    return (
        <>
            <div>Loading: {loading.toString()}</div>
            <div>Error: {error?.message}</div>
            <div>
                {latitude} x {longitude}
            </div>
        </>
    )
}
```