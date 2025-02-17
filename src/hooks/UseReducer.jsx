import React, { useReducer } from 'react';
import '../../src/App.css';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
function UseReducer() {
  // Alternative to useState hook, its for complex state management
  //useReducer takes 2 args 1) reducer function which in turns takes 2 args (state and action) 2) initialState
  // return a pair of [state ,dispatch ] ==> dispatch calls an action and which in turns in reducer function after action new state returns
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <h2>Count = {count}</h2>
      <div className="counter">
        <button
          type="submit"
          className="btn"
          onClick={() => dispatch('increment')}
        >
          Increment
        </button>
        <button
          type="submit"
          className="btn"
          onClick={() => dispatch('decrement')}
        >
          Decrement
        </button>
        <button type="submit" className="btn" onClick={() => dispatch('reset')}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default UseReducer;
