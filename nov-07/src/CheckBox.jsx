/* eslint-disable react/prop-types */
export default function CheckBox({ showStockedOnly, setShowStockedOnly }) {
  return (
    <div>
      <input
        type="checkbox"
        id="stocked-checkbox"
        checked={showStockedOnly}
        onChange={(e) => setShowStockedOnly(e.target.checked)}
      />

      <label htmlFor="stocked-checkbox">
        Only show products in stock
      </label>
    </div>
  )
}