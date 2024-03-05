import { useState } from "react";
import React from 'react';
import Counter from "./counter";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {    
      setCount(count + 1);
  };

  return (
    <div className='App'>
      <button onClick={handleButtonClick}>Click me</button>
      <h1>Hi</h1>
      <Counter count={count}/>
    </div>    
  );
}

export default App;
