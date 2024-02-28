import Category from './Category'
import { ProductCart } from './ProductCart'
import { SearchBar } from './SearchBar'

export const ProductBoard = () => {
  return (
    <>
    <div>
    <SearchBar />
    <Category />
   <ProductCart />
    </div>
    </>
  )
}
