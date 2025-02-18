import React, { useEffect, useRef, useState } from 'react';
import '../../src/App.css';

function UseRef() {
  const btnRef = useRef();

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 20);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  useEffect(() => {
    console.log('Initial Rendering.....');

    //Can access the DOM element using ref.current
    btnRef.current.style.backgroundColor = 'gray';
  }, []);
  console.log('current : ', btnRef.current);
  return (
    <div className="">
      <h2>Time Passed = {secondsPassed.toFixed(3)}</h2>
      <div className="counter">
        <button type="submit" className="btn" onClick={handleStart}>
          Start
        </button>
        <button
          type="submit"
          ref={btnRef}
          id="stop"
          className="btn"
          onClick={handleStop}
        >
          Stop
        </button>

        <button
          onClick={() => {
            btnRef.current.style.display = 'none';
          }}
          className="btn"
        >
          {' '}
          Hide Stop
        </button>
      </div>
      <div className="container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h4>Current Value: {inputValue}</h4>
        <h4>Previous Value: {previousInputValue.current}</h4>
      </div>
    </div>
  );
}
export default UseRef;
