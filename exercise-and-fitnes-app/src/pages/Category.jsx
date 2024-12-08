import { useDispatch, useSelector } from 'react-redux'
import {
  Filters,
  Pagination,
  Products,
  Range,
  Heading,
  SearchBar,
  InformationSection,
  ProductBrandSection,
  TopRatedProductSection,
  Banner,
} from '../components'
import paymentIcon from '../assets/images/payment-icons.png'
import { useLoaderData } from 'react-router-dom'
import { createClient } from 'contentful'
import { handlePriceFilter } from '../features/products/productsFiltersSlice'
import ProductCategoriesSection from '../components/ProductCategoriesSection'

const findMaxPrice = (arr) => {
  return arr.reduce((max, current) => {
    return current.productPrice > max.productPrice ? current : max
  })
}
const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const queryData = {
  queryKey: ['products'],
  queryFn: () => client.getEntries({ content_type: 'exerciseFitnessProducts' }),
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const category = params.category
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
    const selectedCategory = productsList.filter(
      (product) => product.subCategory === category
    )
    return { selectedCategory, category, productsList }
  }

const Category = () => {
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

  const { selectedCategory, category } = useLoaderData()
  const maxProduct = findMaxPrice(selectedCategory)
  const checkSelectedPrice = price || maxProduct.productPrice
  const sortByLowToHighPrice = selectedCategory
    .slice()
    .sort((a, b) => (a.productPrice > b.productPrice ? 1 : -1))

  const sortByHighToLowPrice = selectedCategory
    .slice()
    .sort((a, b) => (a.productPrice < b.productPrice ? 1 : -1))
  const sortByZToA = selectedCategory
    .slice()
    .sort((a, b) => (a.productName < b.productName ? 1 : -1))
  const sortByAToZ = selectedCategory
    .slice()
    .sort((a, b) => (a.productName > b.productName ? 1 : -1))
  const sortByRating = selectedCategory
    .slice()
    .sort((a, b) => (a.productRatings < b.productRatings ? 1 : -1))
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
      : selectedCategory

  const searchAndPriceFiltered = sortedProducts
    .filter((product) => product.productName.includes(searchWord))
    .filter(({ sale, discountPrice, productPrice }) =>
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
      <Banner
        pageName={category}
        subtitle="category"
        backgroundImage="bg-[url('./assets/images/categories.JPG')]"
      />
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
          <div className=" w-full text-sm mb-10">
            <section className="mb-6">
              <Heading text="search" margin="mb-3" size="text-[1rem] " />
              <SearchBar
                width="w-full"
                borderRadius="rounded-md"
                placeholder="Search Products"
              />
            </section>
            <section className="mb-6">
              <ProductCategoriesSection activeCategory={category} />
            </section>
            <section className="mb-6">
              <Heading
                text="top rated products"
                margin="mb-2.5"
                size="text-[1rem]"
              />
              <TopRatedProductSection total={3} />
            </section>
            {/* <section className="mb-6">
              <Heading
                text="filter by color"
                margin="mb-3"
                size="text-[1rem]"
              />
              <Select
                name="color"
                list={['Any Color', 'Red', 'Blue', 'Black', 'White']}
              />
            </section> */}
            <section className="mb-6">
              <Heading
                text="filter by price"
                margin="mb-3"
                size="text-[1rem]"
              />
              <Range
                name={category}
                label={category}
                products={selectedCategory}
              />
            </section>
            <section className="mb-6 text-xs">
              <ProductBrandSection />
            </section>
            <section className="mb-6 text-xs">
              <InformationSection />
            </section>
            <section>
              <img src={paymentIcon} alt="payment-icons" loading="lazy" />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
export default Category
