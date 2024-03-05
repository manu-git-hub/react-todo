import React,{useState, useEffect} from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    console.log("Mounting...", count);
    return ()=>{
      console.log("Update..", count);
    }
  },[count])
  return (
    <>
    <button  onClick={() => setCount(count +  1)}>Increment</button>
    <div>Hello I am counter {count}</div>
    </>
  )
}

export default Counter