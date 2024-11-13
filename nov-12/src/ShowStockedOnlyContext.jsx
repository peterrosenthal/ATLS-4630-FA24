/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

export const ShowStockedOnlyContext = createContext(null);

export function ShowStockedOnlyContextProdider({ children }) {
  const [ value, dispatch ] = useReducer(showStockedOnlyReducer, false)

  return (
    <ShowStockedOnlyContext.Provider
      value={{
        showStockedOnly: value,
        showStockedOnlyDispatch: dispatch,
      }}
    >
      {children}
    </ShowStockedOnlyContext.Provider>
  )
}

function showStockedOnlyReducer(value, event) {
  switch (event.type) {
    case 'set':
      return event.value
    default:
      return value
  }
}
