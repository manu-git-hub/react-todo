import { useState } from "react";
import React from 'react';
import Employee from "./Employee";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {    
      setCount(count + 1);
  };

  let emp =[{name:"Manu", age:21},
  {name:"Bob", age:22},
  {name:"Steve", age:25},

]
  return (
    <div className='App'>
      <button onClick={handleButtonClick}>Click me</button>
      <h1>Hi</h1>
      {
        emp.map((obj,index) => 
         (
          // <Employee key={index} name={obj.name} age={obj.age}/>
          <Employee key={index} {...obj}/>
        )
      )}
    </div>    
  );
}

export default App;
