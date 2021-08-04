import { useState } from "react"

const Counter = () => {
  //tell component to remember some value using useState
  let [count, setCount] = useState<number>(1)

  const callback = () => {
    //correct way
    setCount(count + 1)

    //wrong way (will not work)
    // count = count + 1
  }

  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <button onClick={callback}>Click me</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter