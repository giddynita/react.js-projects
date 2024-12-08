import { useLoaderData } from 'react-router-dom'
import Benefits from './Benefits'
import Heading from './Heading'
import SingleProductCategories from './SingleProductCategories'
import TopRatedProductSection from './TopRatedProductSection'

const RelatedProductDetails = ({ singleProduct }) => {
  const { productsList } = useLoaderData()
  return (
    <div className="h-max">
      <section className="mb-8">
        <Benefits />
      </section>
      <section className="mb-5">
        <Heading text="top rated products" margin="mb-3" />
        <TopRatedProductSection total={4} products={productsList} />
      </section>
      <section>
        <SingleProductCategories singleProduct={singleProduct} />
      </section>
    </div>
  )
}
export default RelatedProductDetails
