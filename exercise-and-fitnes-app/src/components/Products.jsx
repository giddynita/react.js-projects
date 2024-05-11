import { formatPrice } from '../utils'
import { TiStarFullOutline } from 'react-icons/ti'
import Heading from './Heading'
import { useSelector } from 'react-redux'
import { products } from '../data'

const ratings = [
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
]

const Products = ({ paginatedAndFilteredProducts }) => {
  return (
    <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-8">
      {paginatedAndFilteredProducts.map(
        (
          {
            productImage,
            productName,
            productRatings,
            productPrice,
            sale,
            discountPrice,
          },
          index
        ) => {
          const productAmount = formatPrice(productPrice)
          const discountAmount = formatPrice(discountPrice)
          return (
            <div
              key={index}
              className="shadow rounded-md relative overflow-hidden h-max"
            >
              <figure className="p-2">
                <img src={productImage} alt={productName} />
              </figure>
              <div className="text-center  rounded-b-md bg-white pb-5 pt-3">
                <Heading text={productName} />
                <div className="flex items-center justify-center w-max mx-auto  text-accent/30 background-clip">
                  {productRatings &&
                    ratings.map((item, index) => {
                      const rating =
                        index < productRatings ? 'text-yellow-500' : ''
                      return (
                        <h5 key={index} className={rating}>
                          {item}
                        </h5>
                      )
                    })}
                </div>
                <p className="text-primary my-2 text-[0.8rem]">
                  {sale ? (
                    <>
                      <span className="line-through text-accent/30 mr-1">
                        {productAmount}
                      </span>
                      {discountAmount}
                    </>
                  ) : (
                    <>{productAmount} </>
                  )}
                </p>
                <button
                  type="button"
                  className="font-semibold rounded-md uppercase text-[0.65rem] text-white bg-primary hover:bg-secondary py-2.5 px-3"
                >
                  add to cart
                </button>
              </div>
              {sale && (
                <span className="absolute top-3 -right-6 bg-primary text-white uppercase text-xs rotate-45 w-24 text-center py-0.5 pl-0.5">
                  sale!
                </span>
              )}
            </div>
          )
        }
      )}
    </div>
  )
}
export default Products
