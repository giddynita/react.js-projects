import { formatPrice } from '../utils'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { productList } from '../data'

const TopRatedProductSection = ({ total }) => {
  const topRated = productList
    .filter((item) => item.topRated)
    .filter((_, index) => index < total)

  return (
    <div>
      {topRated.map(
        (
          {
            productName,
            productPrice,
            productImage,
            productRatings,
            productId,
          },
          index
        ) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between text-xs border-b mb-1 last:border-b-0 pb-1.5"
            >
              <div>
                <Link
                  to={`/shop/products/${productId}`}
                  className="text-accent/80 mb-0.5 capitalize text-sm hover:text-primary"
                >
                  {productName}
                </Link>
                <Rating productRatings={productRatings} />
                <p className=" text-accent/50 mt-1 ">
                  {formatPrice(productPrice)}
                </p>
              </div>
              <figure className="w-12">
                <img src={productImage} alt={productName} loading="lazy" />
              </figure>
            </div>
          )
        }
      )}
    </div>
  )
}
export default TopRatedProductSection
