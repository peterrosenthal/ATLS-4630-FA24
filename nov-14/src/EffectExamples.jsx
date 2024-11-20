/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

export default function EffectExamples({ debouncedText, setDebouncedText }) {
  const [ counter1, setCounter1 ] = useState(0)
  const [ counter2, setCounter2 ] = useState(0)

  const [ text, setText ] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text)
    }, 250)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [ text, setDebouncedText ])

  useEffect(() => {
    console.log('this is my main effect!')

    return () => {
      console.log('this is my cleanup effect!')
    }
  }, [ counter1 ])

  return (
    <div>
      <button onClick={() => setCounter1(c => c + 1)}>Counter 1: {counter1}</button>
      <button onClick={() => setCounter2(c => c + 1)}>Counter 2: {counter2}</button>

      <input type="text" value={text} onInput={e => setText(e.target.value)} />
    </div>
  )
}
