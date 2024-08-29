# `useStateWithValidation`

A hook to manage state with validation, providing validity status.

## Arguments

- `validationFunc` (`function`): The function to validate the state.
- `initialValue` (`any`): The initial value for the state.

## Returns

- `[state, onChange, isValid]` (`array`): 
  - `state` (`any`): The current state.
  - `onChange` (`function`): Function to update the state.
  - `isValid` (`boolean`): Validation status of the current state.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)
- [useCallback](https://react.dev/reference/react/useCallback)

## How to Use

```js
import useStateWithValidation from "./useStateWithValidation"

export default function StateWithValidationComponent() {
    const [username, setUsername, isValid] = useStateWithValidation(
        name => name.length > 5,
        ""
    )

    return (
        <>
            <div>Valid: {isValid.toString()}</div>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </>
    )
}
```
