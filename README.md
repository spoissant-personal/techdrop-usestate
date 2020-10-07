# Summary
## LemonadeStand0
* Use a callback to initialize useState instead of a function call (or use a primitive :) )
  * GOOD `[state, setState] = useState(0)`
  * GOOD `[state, setState] = useState(someFunc)`
  * BAD`[state, setState] = useState(someFunc())`
* State changes trigger a re-render
  * You can use `useRef` to keep track of stuff "under the hood"

## LemonadeStand1
* If the new state depends on a previous state, use a callback in the stateSetter 
  * `setState(prev => ...)`

## LemonadeStand2
* Make your states decoupled and as independent as possible

## LemonadeStand3
* Be careful with deeply nested objects in state
  * Behind the hood, React uses `Object.is` polyfill to compare hook dependencies. This method compares non-primitive values (e.g. arrays, objects) by reference, not by value.
* If your state is very complicated, consider using `useReducer` (very similar to using `Redux`)

## References
* https://dmitripavlutin.com/react-usestate-hook-guide/