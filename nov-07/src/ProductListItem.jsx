/* eslint-disable react/prop-types */
export default function ProductListItem({ product }) {
  return (
    <div className="product-list-item">
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  )
}