import EffectExamples from './EffectExamples'
import RefVsState from './RefVsState'
import StopWatch from './StopWatch'
import WidthOfElement from './WidthOfElement'

import { useState } from 'react'

export default function App() {
  const [ showEffectExamples, setShowEffectExamples ] = useState(true)
  const [ searchText, setSearchText ] = useState('')

  console.log(searchText)

  // add a very necessary comment
  /*
  let effectExamples = null
  if (showEffectExamples) {
    effectExamples = <EffectExamples />
  }
  */

  // peter's super important comment
  // another very necessary comment
  return (
    <>
      <RefVsState />
      <br />
      <br />
      <StopWatch />
      <br />
      <br />
      <WidthOfElement />
      <br />
      <br />
      <button onClick={() => setShowEffectExamples(!showEffectExamples)}>Show effect examples</button>
      {/* showEffectExamples ? <EffectExamples /> : null */}
      { showEffectExamples && <EffectExamples debouncedText={searchText} setDebouncedText={setSearchText} /> }
    </>
  )
}
