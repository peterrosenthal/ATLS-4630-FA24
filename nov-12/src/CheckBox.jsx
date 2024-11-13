/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ShowStockedOnlyContext } from './ShowStockedOnlyContext'

export default function CheckBox() {
  const {
    showStockedOnly,
    showStockedOnlyDispatch,
  } = useContext(ShowStockedOnlyContext)

  return (
    <div>
      <input
        type="checkbox"
        id="stocked-checkbox"
        checked={showStockedOnly}
        onChange={(e) => showStockedOnlyDispatch({
          type: 'set',
          value: e.target.checked,
        })}
      />

      <label htmlFor="stocked-checkbox">
        Only show products in stock
      </label>
    </div>
  )
}