# `useCopyToClipboard`

## Arguments

- None

## Returns

- An array containing:
  - A function to copy text to the clipboard.
  - A boolean indicating if the copy was successful.

## Hooks Involved

- [useState](https://react.dev/reference/react/useState)

## Liraries Involved

- copy from `copy-to-clipboard`

## How to Use

```js
import useCopyToClipboard from "./useCopyToClipboard"

export default function CopyToClipboardComponent() {
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <>
            <button onClick={() => copyToClipboard("This was copied")}>
                {success ? "Copied" : "Copy Text"}
            </button>
            <input type="text" />
        </>
    )
}
```
