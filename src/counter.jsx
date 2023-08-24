
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState (0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount (count - count);
  }
  
  return (

    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>

  );
};

export default Counter;