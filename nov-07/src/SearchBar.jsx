/* eslint-disable react/prop-types */
export default function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className="search-bar"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}
