import { useSelector } from 'react-redux'
import {
  AdvancedFilter,
  Button,
  Carousel,
  Filters,
  Pagination,
  Products,
} from '../components'
import { useLoaderData } from 'react-router-dom'
import { createClient } from 'contentful'
const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const queryData = {
  queryKey: ['products'],
  queryFn: () => client.getEntries({ content_type: 'exerciseFitnessProducts' }),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(queryData)
  const productsList = response.items.map((content) => {
    const {
      category,
      productBrand,
      productDesc,
      productId,
      productName,
      productPrice,
      productRatings,
      sale,
      subCategory,
      topRated,
      productImage,
      discountPrice,
    } = content.fields
    const image = productImage?.fields?.file?.url
    return {
      category,
      productBrand,
      productDesc,
      productId,
      productName,
      productPrice,
      productRatings,
      sale,
      subCategory,
      topRated,
      image,
      discountPrice,
    }
  })
  return { productsList }
}
const findMaxPrice = (arr) => {
  return arr.reduce((max, current) => {
    return current.productPrice > max.productPrice ? current : max
  })
}

const Shop = () => {
  const { productsList } = useLoaderData()
  const maxProduct = findMaxPrice(productsList)

  const {
    searchWord,
    price,
    colorType,
    brand,
    selectedPage,
    productsPerPage,
    sortBy,
  } = useSelector((state) => {
    return state.productState
  })
  const sortByLowToHighPrice = productsList
    .slice()
    .sort((a, b) => (a.productPrice > b.productPrice ? 1 : -1))

  const sortByHighToLowPrice = productsList
    .slice()
    .sort((a, b) => (a.productPrice < b.productPrice ? 1 : -1))
  const sortByZToA = productsList
    .slice()
    .sort((a, b) => (a.productName < b.productName ? 1 : -1))
  const sortByAToZ = productsList
    .slice()
    .sort((a, b) => (a.productName > b.productName ? 1 : -1))
  const sortByRating = productsList
    .slice()
    .sort((a, b) => (a.productRatings < b.productRatings ? 1 : -1))
  console.log(sortByRating)

  const sortedProducts =
    sortBy === 'Sort by price: low to high'
      ? sortByLowToHighPrice
      : sortBy == 'Sort by price: high to low'
      ? sortByHighToLowPrice
      : sortBy == 'Sort by name: a - z'
      ? sortByAToZ
      : sortBy == 'Sort by name: z - a'
      ? sortByZToA
      : sortBy == 'Sort by average rating'
      ? sortByRating
      : productsList

  const searchFiltered = sortedProducts.filter((product) =>
    product.productName.includes(searchWord)
  )
  const checkSelectedPrice = price || maxProduct.productPrice
  const searchAndPriceFiltered = searchFiltered.filter(
    ({ sale, discountPrice, productPrice }) =>
      sale
        ? discountPrice <= checkSelectedPrice
        : productPrice <= checkSelectedPrice
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
    searchAndPriceFilteredWithColorAndBrand.length <= productsPerPage
      ? searchAndPriceFilteredWithColorAndBrand
      : searchAndPriceFilteredWithColorAndBrand.slice(
          selectedPage * productsPerPage,
          (selectedPage + 1) * productsPerPage
        )

  return (
    <>
      <section className="w-full bg-black bg-[url('./assets/images/contacts-slider-bg.png')] bg-center  py-6 sm:h-[62vw] md:h-[49vw] lg:h-[500px] border-y-[4px] border-y-primary relative text-gray-500 flex flex-col items-center justify-center text-center gap-10">
        <div className="uppercase text-white/80">
          <h3 className="text-4xl md:text-5xl font-extrabold word-spacing mb-1">
            gear up for fitness
          </h3>
          <p className="sm:text-md md:text-lg font-semibold">
            top quality gym gear for every fitness goal
          </p>
        </div>
        <a href="#products">
          <Button
            type="button"
            text="shop now"
            customStyles="text-xs md:text-sm lg:text-md px-2 sm:w-40 md:w-44 lg:w-48 py-2.5 rounded font-semibold"
          />
        </a>
      </section>
      <div className="lg:grid lg:grid-cols-7 w-[90%] mx-auto max-w-screen-lg gap-x-14">
        <div className="py-10 lg:col-span-5" id="products">
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
