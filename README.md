# React Custom Hooks Snippets Extension for VS Code (In Progress)

Enhance your development workflow with this VS Code extension that offers a collection of useful React Custom hooks as code. Whether you're using JavaScript or TypeScript, this extension dynamically loads and provides snippets from external files, to fit your project needs.

## What It Does

- **Hooks Snippets**: Provides ready-to-use snippets for various React hooks.
- **Automatic Loading**: Loads snippets from files, including hooks that depend on others.
- **File Type Detection**: Chooses the right snippet based on whether you're using JavaScript or TypeScript.

## How to Use

1. Open a JavaScript or TypeScript file in VS Code.
2. Type the snippet prefix (e.g., `useFetch`).
3. Select the snippet from the suggestion list to insert it into your code.

## Available Snippets

Here are some of the snippets you can use:

| Hook                    | Description                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------|
| **useFetch**            | A hook to fetch data from a URL.                                                             |
| **useAsync**            | A hook to handle asynchronous tasks.                                                         |
| **useArray**            | A hook for managing and manipulating an array with functions like push, filter, update, remove, and clear. |
| **useClickOutside**     | A hook to detect clicks outside a specified element and trigger a callback.                   |
| **useCookie**           | A hook for managing cookies with get, set, and delete functionality.                         |
| **useCopyToClipboard**  | A hook to copy text to the clipboard and track success.                                        |
| **useDebounce**         | A hook to debounce a callback function with a specified delay.                                |
| **useDeepCompareEffect**| A hook for running an effect with dependencies that are deeply compared.                      |
| **useEffectOnce**       | A hook to run an effect only once on mount.                                                   |
| **useGeolocation**      | A hook to get and watch the user's geolocation.                                               |
| **useHover**            | A hook to track whether an element is being hovered over.                                     |
| **useMediaQuery**       | A hook to detect whether a media query matches.                                                |
| **useOnlineStatus**     | A hook to detect the online/offline status of the browser.                                    |
| **useOnScreen**         | A hook to detect if an element is visible within the viewport.                                |
| **usePrevious**         | A hook to keep track of the previous value of a state or prop.                                |
| **useRenderCount**      | A hook to count the number of times a component has rendered.                                 |
| **useScript**           | A hook to dynamically load a script and handle its loading state.                             |
| **useStorage**          | A generic hook for managing state with a storage mechanism (e.g., localStorage, sessionStorage). |
| **useSessionStorage**   | A hook for managing state with sessionStorage.                                                |
| **useLocalStorage**     | A hook for managing state with localStorage.                                                  |
| **useDarkMode**         | A hook to manage dark mode state and apply dark mode styling based on user preference and localStorage. |
| **useTimeout**          | A hook to manage a timeout with set, clear, and reset functionalities.                         |
| **useToggle**           | A hook to toggle a boolean value.                                                             |
| **useUpdateEffect**     | A hook to run an effect only on updates, not on the initial mount.                            |
| **useWindowSize**       | A hook to track the window size and update on resize events.                                  |
| **useStateWithHistory** | A hook to manage state with an undo/redo history mechanism.                                   |
| **useStateWithValidation** | A hook to manage state with validation, providing validity status.                          |
| **useLongPress**        | A hook to detect long press interactions on an element.                                       |
| **useDebugInformation** | A hook to provide debugging information, including render count and changed props.           |


### Hook Documentation

For detailed information about each hook, check out the following links:

- [useFetch Documentation](https://github.com/itszeeshan/react-custom-hooks/docs/useFetch.md)
- [useAsync Documentation](https://github.com/your-username/react-custom-hooks/docs/useAsync.md)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test them.
4. Submit a pull request.

## Shout Out:
Thanks to [sergeyleschev](https://github.com/sergeyleschev) for creating such amazing hooks, support him the best you can because he is doing a great job!

## License

This project is licensed under the MIT License. Check the [LICENSE](LICENSE) file for details.