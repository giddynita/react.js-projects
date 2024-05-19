import Benefits from './Benefits'
import Heading from './Heading'
import ProductSubCategories from './ProductSubCategories'
import TopRatedProductSection from './TopRatedProductSection'

const RelatedProductDetails = () => {
  return (
    <div className="h-max">
      <section className="mb-8">
        <Benefits />
      </section>
      <section className="mb-5">
        <Heading text="top rated products" margin="mb-3" />
        <TopRatedProductSection total={4} />
      </section>
      <section>
        <Heading text="product categories" margin="mb-3" />
        <ProductSubCategories />
      </section>
    </div>
  )
}
export default RelatedProductDetails
