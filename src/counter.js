import React,{useState} from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
    <button  onClick={() => setCount(count +  1)}>Increment</button>
    <div>Hello I am counter {count}</div>
    </>
  )
}

export default Counter