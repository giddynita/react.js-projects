import Range from './Range'
import Heading from './Heading'
import SearchBar from './SearchBar'
import InformationSection from './InformationSection'
import ProductBrandSection from './ProductBrandSection'
import TopRatedProductSection from './TopRatedProductSection'
import ProductCategoriesSection from './ProductCategoriesSection'
import paymentIcon from '../assets/images/payment-icons.png'
import { useLoaderData } from 'react-router-dom'

const AdvancedFilter = () => {
  const { productsList } = useLoaderData()

  return (
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
        <ProductCategoriesSection />
      </section>
      <section className="mb-6">
        <Heading text="top rated products" margin="mb-2.5" size="text-[1rem]" />
        <TopRatedProductSection total={3} products={productsList} />
      </section>
      {/* <section className="mb-6">
        <Heading text="filter by color" margin="mb-3" size="text-[1rem]" />
        <Select
          name="color"
          list={['Any Color', 'Red', 'Blue', 'Black', 'White']}
        />
      </section> */}
      <section className="mb-6">
        <Heading text="filter by price" margin="mb-3" size="text-[1rem]" />
        <Range name="price" label="price" products={productsList} />
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
  )
}
export default AdvancedFilter
