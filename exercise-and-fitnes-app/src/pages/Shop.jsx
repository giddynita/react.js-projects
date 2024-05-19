import { useSelector } from 'react-redux'
import {
  AdvancedFilter,
  Carousel,
  Filters,
  Pagination,
  Products,
} from '../components'
import { products } from '../data'
const Shop = () => {
  const { searchWord, price, colorType, brand, selectedPage, productsPerPage } =
    useSelector((state) => {
      return state.productState
    })
  const searchAndPriceFiltered = products
    .filter((product) => product.productName.includes(searchWord))
    .filter((product) =>
      product.sale
        ? product.discountPrice <= price
        : product.productPrice <= price
    )
  const searchAndPriceFilteredWithColor = searchAndPriceFiltered.filter(
    (product) =>
      colorType && colorType !== 'Any Color'
        ? product.productColor.includes(colorType)
        : searchAndPriceFiltered
  )
  const searchAndPriceFilteredWithColorAndBrand = brand
    ? searchAndPriceFilteredWithColor.filter(
        (product) => product.productBrand === brand
      )
    : searchAndPriceFilteredWithColor
  const paginatedAndFilteredProducts =
    searchAndPriceFilteredWithColorAndBrand.slice(
      selectedPage * productsPerPage,
      (selectedPage + 1) * productsPerPage
    )

  return (
    <>
      <Carousel />
      <div className="lg:grid lg:grid-cols-7 w-[90%] mx-auto max-w-screen-lg gap-x-14">
        <div className="py-10 lg:col-span-5">
          <Filters />
          <Products
            paginatedAndFilteredProducts={paginatedAndFilteredProducts}
          />
          {searchAndPriceFilteredWithColorAndBrand.length > productsPerPage && (
            <Pagination
              searchAndPriceFilteredWithColorAndBrand={
                searchAndPriceFilteredWithColorAndBrand
              }
            />
          )}
        </div>
        <div className="hidden lg:flex lg:col-span-2 pt-10">
          <AdvancedFilter />
        </div>
      </div>
    </>
  )
}
export default Shop
