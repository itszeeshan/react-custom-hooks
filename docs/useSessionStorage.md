# `useSessionStorage`

A hook for managing state with sessionStorage.

## Arguments

- `key` (`string`): The key for the session storage item.
- `defaultValue` (`any`): The default value to set if no item is found.

## Returns

- An array containing:
  - The current session storage value.
  - Functions to set and remove the session storage item.

## Hooks Involved

- [useStorage](./useStorage.md)

## How to Use

```js
import { useSessionStorage, useLocalStorage } from "./useStorage" //create a seperate file including useStorage and create them there. See docs for useStorage to better understand.

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
