import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(5)

  const incNumber = () => {
    let newNum = counter + 1
    setCounter(newNum)
  }
  const decNumber = () => {
    let newNum = counter - 1
    if (newNum === -1) {
      setCounter(counter)
      alert("Number Cannt be Zero")
    } else {
      setCounter(newNum)
    }
  }

  return (
    <>
      <section>
        <button onClick={decNumber}>
          <i className='fa fa-minus'></i>
        </button>
        <div className='box'>
          <h1>{counter}</h1>
        </div>
        <button onClick={incNumber}>
          <i className='fa fa-plus'></i>
        </button>
      </section>
    </>
  )
}

export default Counter
