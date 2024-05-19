import { formatPrice } from '../utils'
import { products } from '../data'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const TopRatedProductSection = ({ total }) => {
  return (
    <div>
      {products
        .filter((product, index) => product.topRated === true && index < total)
        .map(
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
                  <img src={productImage} alt={productName} />
                </figure>
              </div>
            )
          }
        )}
    </div>
  )
}
export default TopRatedProductSection
