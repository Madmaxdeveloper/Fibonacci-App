import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';
// import moment from 'moment-timezone';
import './style.css';




function App() {
  const [length, set_length] = useState(3);
  return (
    <>
      <p id="finder"> Fibonacci Finder </p>
      <input className="input"
        value={length}
        onChange={(e) => set_length(Number(e.target.value))}
      />
      <FibDisplay length={length} />
    </>
  );
}

function FibDisplay({ length }) {
  const numbers = useMemo(() => {
    console.log('Calculating numbers...');
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return (

    <p id="num">
      {length} numbers of the fibonacci sequence: {numbers.join(', ')}
    </p>
  );
}

export default App;
