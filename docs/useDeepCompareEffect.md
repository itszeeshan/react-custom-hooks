# `useDeepCompareEffect`

A hook for running an effect with dependencies that are deeply compared.

## Arguments

- `callback` (`function`): The effect function to run.
- `dependencies` (`array`): The dependencies for the effect, deeply compared.

## Returns

- None

## Hooks Involved

- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef)

## libraries Involved
- isEqual `lodash --> lodash/fp/isEqual`

## How to Use

```js
import { useEffect, useState, useRef } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

export default function DeepCompareEffectComponent() {
    const [age, setAge] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    const useEffectCountRef = useRef()
    const useDeepCompareEffectCountRef = useRef()

    const person = { age: age, name: "Sergey" }

    useEffect(() => {
        useEffectCountRef.current.textContent =
            parseInt(useEffectCountRef.current.textContent) + 1
    }, [person])

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent =
            parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
    }, [person])

    return (
        <div>
            <div>
                useEffect: <span ref={useEffectCountRef}>0</span>
            </div>
            <div>
                useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
            </div>
            <div>Other Count: {otherCount}</div>
            <div>{JSON.stringify(person)}</div>
            <button onClick={() => setAge(currentAge => currentAge + 1)}>
                Increment Age
            </button>
            <button onClick={() => setOtherCount(count => count + 1)}>
                Increment Other Count
            </button>
        </div>
    )
}
```
