import React from 'react'

function Counter(props) {
    const{title,count}= props

  return (
    <div>
        <h1>{title} is {count}</h1>
    </div>
  )
}

export default Counter


