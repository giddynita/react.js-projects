import { productList } from '../data'
import {
  Banner,
  DescriptionAndReview,
  ProductDetails,
  RelatedProductDetails,
} from '../components'

export const loader = ({ params }) => {
  const productId = params.productId
  const singleProduct = productList.find(
    (product) => product.productId === productId
  )
  return { singleProduct }
}

const SingleProduct = () => {
  return (
    <>
      <Banner
        pageName="shop"
        subtitle="product details"
        backgroundImage="bg-[url('./assets/images/shop_product_details.JPG')]"
      />
      <section className="width my-10 ">
        <div className="lg:grid lg:grid-cols-7 gap-x-8">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ProductDetails />
            <DescriptionAndReview />
          </div>
          <div className="hidden lg:grid lg:col-span-2 ">
            <RelatedProductDetails />
          </div>
        </div>
      </section>
    </>
  )
}
export default SingleProduct
