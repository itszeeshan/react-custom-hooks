# `useStateWithHistory`

A hook to manage state with an undo/redo history mechanism.

## Arguments

- `defaultValue` (`any`): The initial value for the state.
- `options` (`object`, optional): Configuration options.
  - `capacity` (`number`): The maximum number of history entries.

## Returns

- `[value, set, historyState]` (`array`): 
  - `value` (`any`): The current state.
  - `set` (`function`): Function to update the state and history.
  - `historyState` (`object`): Object containing history-related functions and state.
    - `history` (`array`): Array of historical states.
    - `pointer` (`number`): The current position in the history.
    - `back` (`function`): Function to go back in history.
    - `forward` (`function`): Function to go forward in history.
    - `go` (`function`): Function to go to a specific history index.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useRef](https://react.dev/reference/react/useRef)
- [useCallback](https://react.dev/reference/react/useCallback)

## How to Use

```js
import { useState } from "react"
import useStateWithHistory from "./useStateWithHistory"

export default function StateWithHistoryComponent() {
    const [count, setCount, { history, pointer, back, forward, go }] =
        useStateWithHistory(1)
    const [name, setName] = useState("Sergey")

    return (
        <div>
            <div>{count}</div>
            <div>{history.join(", ")}</div>
            <div>Pointer - {pointer}</div>
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount * 2)}>
                Double
            </button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={() => go(2)}>Go To Index 2</button>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}
```
