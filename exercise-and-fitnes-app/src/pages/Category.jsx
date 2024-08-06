import { useSelector } from 'react-redux'
import {
  Filters,
  Pagination,
  Products,
  Range,
  Heading,
  SearchBar,
  InformationSection,
  ProductBrandSection,
  Select,
  TopRatedProductSection,
  SubCategories,
  Banner,
} from '../components'
import paymentIcon from '../assets/images/payment-icons.png'
import { useLoaderData } from 'react-router-dom'
import { productList } from '../data'

export const loader = ({ params }) => {
  const category = params.category
  const selectedCategory = productList.filter(
    (product) => product.category === category
  )
  return { selectedCategory, category }
}

const Category = () => {
  const {
    searchWord,
    equipment,
    nutrition,
    colorType,
    brand,
    selectedPage,
    productsPerPage,
    products,
  } = useSelector((state) => {
    return state.productState
  })

  const { selectedCategory, category } = useLoaderData()
  const categoryPrice =
    (category === 'equipment' && equipment) ||
    (category === 'nutrition' && nutrition)
  const searchAndPriceFiltered = selectedCategory
    .filter((product) => product.productName.includes(searchWord))
    .filter((product) =>
      product.sale
        ? product.discountPrice <= categoryPrice
        : product.productPrice <= categoryPrice
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
              <Heading
                text="product categories"
                margin="mb-3"
                size="text-[1rem]"
              />
              <SubCategories category={category} products={products} />
            </section>
            <section className="mb-6">
              <Heading
                text="top rated products"
                margin="mb-2.5"
                size="text-[1rem]"
              />
              <TopRatedProductSection total={3} />
            </section>
            <section className="mb-6">
              <Heading
                text="filter by color"
                margin="mb-3"
                size="text-[1rem]"
              />
              <Select
                name="color"
                list={['Any Color', 'Red', 'Blue', 'Black', 'White']}
              />
            </section>
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
