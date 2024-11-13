/* eslint-disable react/prop-types */
import SearchArea from './SearchArea'
import ProductList from './ProductList'
import { useState } from 'react'

export default function FilterableProductsList({ products }) {
  const [ searchText, setSearchText ] = useState('');
  const [ showStockedOnly, setShowStockedOnly ] = useState(false);

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
      <SearchArea
        searchText={searchText}
        setSearchText={setSearchText}
        showStockedOnly={showStockedOnly}
        setShowStockedOnly={setShowStockedOnly}
      />
      <div className='lists-container'>
        <ProductList title="Fruits" products={fruits} />
        <ProductList title="Veggies" products={veggies} />
      </div>
    </div>
  );
}