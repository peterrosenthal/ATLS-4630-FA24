import { useRef } from 'react'

export default function WidthOfElement() {
  const divRef = useRef(null)

  function consoleLogDivWidth() {
    console.log(divRef.current.getBoundingClientRect().width)
  }

  return (
    <>
      <div ref={divRef}>This div has text in it!</div>
      <button onClick={consoleLogDivWidth}>Console log the divs width</button>
    </>
  )
}
