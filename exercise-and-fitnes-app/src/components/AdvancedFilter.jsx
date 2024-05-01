import Range from './Range'
import Heading from './Heading'
import SearchBar from './SearchBar'
import InformationSection from './InformationSection'
import ProductBrandSection from './ProductBrandSection'
import Select from './Select'
import TopRatedProductSection from './TopRatedProductSection'
import ProductCategoriesSection from './ProductCategoriesSection'

const AdvancedFilter = ({ products }) => {
  return (
    <div className=" w-full text-sm">
      <section className="mb-6">
        <Heading text="search" margin="mb-3" />
        <SearchBar
          width="w-full"
          borderRadius="rounded-md"
          placeholder="Search Products"
        />
      </section>
      <section className="mb-6">
        <ProductCategoriesSection products={products} />
      </section>
      <section className="mb-6">
        <Heading text="top rated products" margin="mb-3 " />
        <TopRatedProductSection products={products} />
      </section>
      <section className="mb-6">
        <Heading text="filter by" margin="mb-3" />
        <Select
          name="color"
          list={['Any Color', 'Red', 'Blue', 'Black', 'White']}
        />
      </section>
      <section className="mb-6">
        <Heading text="filter by price" margin="mb-3" size="text-sm" />
        <Range name="price" label="price" />
      </section>
      <section className="mb-6 text-xs">
        <ProductBrandSection />
      </section>
      <section className="mb-6 text-xs">
        <InformationSection />
      </section>
    </div>
  )
}
export default AdvancedFilter
