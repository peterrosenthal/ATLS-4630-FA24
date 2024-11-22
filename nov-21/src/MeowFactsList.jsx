import { useEffect, useState } from 'react'

export default function MeowFactsList() {
  const [ meowFacts, setMeowFacts ] = useState([])
  const [ numberOfFacts, setNumberOfFacts ] = useState(1)
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    async function fetchMeowFacts() {
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numberOfFacts}`)
      const json = await response.json()
      setMeowFacts(json.data)
    }
    fetchMeowFacts()
  }, [ numberOfFacts ])

  return (
    <>
      <ul>
        {meowFacts.map((meowFact, index) => <li key={index}>{meowFact}</li>)}
      </ul>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <input type="number" onChange={e => setNumberOfFacts(e.target.value)} value={numberOfFacts} />
    </>
  )
}
