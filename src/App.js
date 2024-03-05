import { useState } from "react";
import React from 'react';
import Counter from "./counter";

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="app">
      <h1 onClick={() => setState(!state) }>React Hooks Example</h1>
      {/* Mounting & Unmounting */}
      {/* {state ? <Counter /> : null} */}
      {state && <Counter /> }
    </div>
  );
}

export default App;
