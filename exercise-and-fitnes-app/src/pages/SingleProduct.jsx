import { products } from '../data'
import {
  DescriptionAndReview,
  ProductDetails,
  RelatedProductDetails,
} from '../components'

export const loader = ({ params }) => {
  const productId = params.productId
  const singleProduct = products.find(
    (product) => product.productId === productId
  )
  return { singleProduct }
}

const SingleProduct = () => {
  return (
    <>
      <section className="bg-[url('./assets/images/shop_product_details.JPG')] h-[23vw] max-h-[180px] w-full bg-cover bg-center text-white flex justify-center flex-col ">
        <div className="uppercase width">
          <h4 className=" text-xl sm:text-3xl font-semibold sm:mb-1">shop</h4>
          <p className=" text-xs sm:text-sm   text-gray-300">product details</p>
        </div>
      </section>
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
