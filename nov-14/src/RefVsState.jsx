import { useState, useRef } from 'react'

// NOTE: this is improper use of ref (rendering it)
// this example is only meant to show the difference between ref and state
export default function RefVsState() {
  const refCounter = useRef(0)
  const [ stateCounter, setStateCounter ] = useState(0)

  function incrementRefCounter() {
    refCounter.current += 1
    console.log(refCounter.current)
  }

  function incrementStateCounter() {
    setStateCounter(stateCounter + 1)
    console.log(stateCounter)
  }

  return (
    <>
      <button onClick={incrementRefCounter}>
        The value of refCounter is {refCounter.current}
      </button>

      <button onClick={incrementStateCounter}>
        The value of stateCounter is {stateCounter}
      </button>
    </>
  )
}
