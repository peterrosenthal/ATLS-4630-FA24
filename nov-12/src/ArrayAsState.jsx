import { useReducer } from 'react'

export default function ArrayAsState() {
  const [ myList, myListDispatch ] = useReducer(myListReducer, ['1'])

  function addItemToMyList() {
    myListDispatch({ type: 'add' })
  }

  return (
    <div>
      <ul>
        {
          myList.map((item, index) =>
            <li key={index}>
              {item}
              <button
                onClick={() => myListDispatch({
                  type: 'remove',
                  item: item,
                })}
              >
                x
              </button>
            </li>
        )
        }
      </ul>

      <button onClick={addItemToMyList}>
        Add new random number!
      </button>
    </div>
  )
}

function myListReducer(myList, event) {
  switch (event.type) {
    case 'add': {
      const newItem = (Math.random() * 100).toString()
      return [ ...myList, newItem ]
    }
    case 'remove': {
      const itemToRemove = event.item
      return myList.filter(item => item !== itemToRemove)
    }
    case 'update':
      return myList.map((item, index) => {
        if (index === event.index) {
          return event.value
        } else {
          return item
        }
      })
  }
}
