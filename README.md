# Summary

## LemonadeStand1

- Use a callback to initialize useState instead of a function call (or use a primitive :) )
  - GOOD `[state, setState] = useState(0)`
  - GOOD `[state, setState] = useState(someFunc)`
  - BAD`[state, setState] = useState(someFunc())`
- State changes trigger a re-render
  - You can use `useRef` to keep track of stuff that don't affect rendering (but remember that rendering is usually cheap...)
- If the new state depends on a previous state, use the functional state setter
  - `setState(prev => ...)`
- Make your states decoupled and as independent as possible
  - Easier to maintain
  - Easier to read
  - Less error prone

## LemonadeStand3

- Be careful with deeply nested objects in state
  - Behind the hood, React uses `Object.is` polyfill to compare hook dependencies. This method compares non-primitive values (e.g. arrays, objects) by reference, not by value.
- If your state is very complicated, consider alternative solutions:
  - `useReducer` (very similar to using `Redux`)
  - Immutable objects (immutable.js, immer, etc.)

## References

- https://dmitripavlutin.com/react-usestate-hook-guide/
