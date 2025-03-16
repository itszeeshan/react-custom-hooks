# `useFetch`

A hook to fetch data from a URL.

## Arguments

- `url` (`string`): The URL to fetch data from.
- `options` (`object`, optional): Additional options for the `fetch` request for example `method: 'GET', headers: { User-Agent: Mozilla 5.0 }`.
- `dependencies` (`array`, optional): Dependency array to control when the fetch should be retriggered.

## Returns

- An object containing `data`, `error`, and `loading`.

## Hooks Involved

- [`useAsync`](./useAsync.md)

## How to Use

```js
import { useFetch } from './hooks/useFetch';

export default function Home() {
  const { loading, error, value } =
    useFetch <
    /*YourDataType*/ >
    ('/api/data',
    { method: 'GET' },
    [
      /* dependencies */
    ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your data here */}
      {JSON.stringify(value)}
    </div>
  );
}
```
