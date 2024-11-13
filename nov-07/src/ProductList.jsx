/* eslint-disable react/prop-types */
import ProductListItem from './ProductListItem'

export default function ProductList({ title, products }) {
  return (
    <div className='product-list'>
      <h2>{title}</h2>
      {
        products.map(product =>
          <ProductListItem key={product.name} product={product} />
        )
      }
    </div>
  )
}