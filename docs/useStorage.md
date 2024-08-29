# `useStorage`

A generic hook for managing state with a storage mechanism (e.g., localStorage, sessionStorage).

## Arguments

- `key` (`string`): The key for the storage item.
- `defaultValue` (`any`): The default value to set if no item is found.
- `storageObject` (`Storage`): The storage mechanism (`localStorage` or `sessionStorage`).

## Returns

- An array containing:
  - The current storage value.
  - Functions to set and remove the storage item.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useCallback](https://react.dev/reference/react/useCallback)
- [useEffect](https://react.dev/reference/react/useEffect)

## How to Use

```js
import { useStorage } from "./useStorage"

function useSessionStorage(key, defaultValue) { // Best is to use our snippet for this in a seperate file and import it from there directly
    return useStorage(key, defaultValue, window.sessionStorage)
}

function useLocalStorage(key, defaultValue) { // Best is to use our snippet for this in a seperate file and import it from there directly
    return useStorage(key, defaultValue, window.localStorage)
}

export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage("name", "Sergey")
    const [age, setAge, removeAge] = useLocalStorage("age", 26)

    return (
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={() => setName("John")}>Set Name</button>
            <button onClick={() => setAge(40)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
}
```
