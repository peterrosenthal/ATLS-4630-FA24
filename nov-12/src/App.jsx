import FilterableProductsList from './FilterableProductsList'
import { ShowStockedOnlyContextProdider } from './ShowStockedOnlyContext'

const data = [
  {
    category: 'Fruits',
    price: 1,
    stocked: true,
    name: 'Apple',
  },
  {
    category: 'Fruits',
    price: 1,
    stocked: true,
    name: 'Banana',
  },
  {
    category: 'Fruits',
    price: 2,
    stocked: false,
    name: 'Peach',
  },
  {
    category: 'Vegetables',
    price: 2,
    stocked: true,
    name: 'Spinach',
  },
  {
    category: 'Vegetables',
    price: 4,
    stocked: true,
    name: 'Squash',
  },
  {
    category: 'Vegetables',
    price: 1,
    stocked: true,
    name: 'Peas',
  },
  {
    category: 'Vegetables',
    price: 1,
    stocked: false,
    name: 'Kale',
  },
]

export default function App() {
  return (
    <ShowStockedOnlyContextProdider>
      <FilterableProductsList products={data} />
    </ShowStockedOnlyContextProdider>
  )
}
