
import React from "react";
import './../styles/App.css';
import State, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1);
  }
  return (
    <div>
        <p>Buttom clicked {count} times</p>
        <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
