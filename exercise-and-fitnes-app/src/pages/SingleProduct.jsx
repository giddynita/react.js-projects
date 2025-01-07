import { createClient } from 'contentful'
import {
  Banner,
  DescriptionAndReview,
  ProductDetails,
  RelatedProductDetails,
} from '../components'
import { Link, useLoaderData } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'

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
    const productId = params.productId
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
    const singleProduct = productsList.find(
      (product) => product.productId === productId
    )
    return { singleProduct, productsList }
  }

const SingleProduct = () => {
  const { singleProduct } = useLoaderData()

  return (
    <>
      <Banner
        pageName="shop"
        subtitle="product details"
        backgroundImage="bg-[url('./assets/images/shop_product_details.JPG')]"
      />
      <div className="width mt-5">
        <Link
          to="/shop"
          className="flex items-center hover:text-gray-800 text-gray-500 w-max font-semibold cursor-pointer"
        >
          <MdArrowBackIos className="text-lg" />
          <span className="uppercase text-xs pt-0.5">back</span>
        </Link>
      </div>
      <section className="width pb-10 pt-5 ">
        <div className="lg:grid lg:grid-cols-7 gap-x-8">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ProductDetails singleProduct={singleProduct} />
            <DescriptionAndReview singleProduct={singleProduct} />
          </div>
          <div className="hidden lg:grid lg:col-span-2 ">
            <RelatedProductDetails singleProduct={singleProduct} />
          </div>
        </div>
      </section>
    </>
  )
}
export default SingleProduct
