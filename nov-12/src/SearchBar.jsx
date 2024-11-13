/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { SearchTextContext } from './SearchTextContext'

export default function SearchBar() {
  const searchTextContext = useContext(SearchTextContext)

  return (
    <input
      type="text"
      className="search-bar"
      value={searchTextContext.searchText}
      onChange={(e) => searchTextContext.setSearchText(e.target.value)}
    />
  )
}
