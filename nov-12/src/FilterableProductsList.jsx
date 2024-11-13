/* eslint-disable react/prop-types */
import SearchArea from './SearchArea'
import ProductList from './ProductList'
import TitleBar from './TitleBar'
import ArrayAsState from './ArrayAsState'
import { SearchTextContext } from './SearchTextContext'
import { useState, useContext } from 'react'
import { ShowStockedOnlyContext } from './ShowStockedOnlyContext'

export default function FilterableProductsList({ products }) {
  const [ searchText, setSearchText ] = useState('')
  const { showStockedOnly } = useContext(ShowStockedOnlyContext)

  const fruits = products.filter(product =>
    product.category === 'Fruits' &&
    (showStockedOnly === true ? product.stocked : true) &&
    (searchText.trim() ? product.name.toLowerCase().includes(searchText.toLowerCase()) : true)
  )
  
  const veggies = products.filter(product => {
    if (product.category !== 'Vegetables') {
      return false
    }

    let result = true;

    if (showStockedOnly) {
      result = product.stocked;
    }

    if (result && searchText.trim()) {
      const name = product.name.toLowerCase()
      const search = searchText.toLowerCase()
      result = name.includes(search)
    }

    return result;
  })

  return (
    <div className='filterable-prodcuts-list'>
      <TitleBar>
        <h2>Groceries</h2>
      </TitleBar>
      <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        <SearchArea />
      </SearchTextContext.Provider>
      <div className='lists-container'>
        <ProductList title="Fruits" products={fruits} />
        <ProductList title="Veggies" products={veggies} />
      </div>
      <ArrayAsState />
    </div>
  );
}