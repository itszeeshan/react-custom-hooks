### `useFetch`

## Parameters

- `url` (`string`): The URL to fetch data from.
- `options` (`object`, optional): Additional options for the `fetch` request.
- `dependencies` (`array`, optional): Dependency array to control when the fetch should be retriggered.

## Returns

- An object containing `data`, `error`, and `loading`.

## Hooks Involved

- [`useAsync`](./useAsync.md)

## How to Use

```js
import { useState } from "react"
import useFetch from "./useFetch"

export default function FetchComponent() {
    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {},
        [id]
    )

    return (
        <div>
            <div>{id}</div>
            <button onClick={() => setId(currentId => currentId + 1)}>
                Increment ID
            </button>
            <div>Loading: {loading.toString()}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}
```
