/* eslint-disable react/prop-types */
import SearchBar from './SearchBar'
import CheckBox from './CheckBox'

export default function SearchArea({ searchText, setSearchText, showStockedOnly, setShowStockedOnly }) {
  return (
    <div className='search-area'>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <CheckBox showStockedOnly={showStockedOnly} setShowStockedOnly={setShowStockedOnly} />
    </div>
  )
}
