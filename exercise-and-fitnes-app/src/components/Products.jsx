import { formatPrice } from '../utils'
import { TiStarFullOutline } from 'react-icons/ti'
import Heading from './Heading'

const ratings = [
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
]

const Products = ({ products }) => {
  return (
    <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(
        (
          { productImage, productName, productRatings, productPrice },
          index
        ) => {
          const dollarsAmount = formatPrice(productPrice)
          const rating = ratings.filter((rating, index) => {
            const filtered = index < productRatings
            if (filtered) {
              return rating
            }
          })

          return (
            <div key={index} className="shadow rounded-md bg">
              <figure className="p-2">
                <img src={productImage} alt={productName} />
              </figure>
              <div className="text-center  rounded-b-md bg-white pb-5 pt-3">
                <Heading text={productName} />
                <div className="flex items-center justify-center text-yellow-500">
                  {rating.map((item, index) => {
                    return <h5 key={index}>{item}</h5>
                  })}
                </div>
                <p className="text-primary my-2">{dollarsAmount}</p>
                <button
                  type="button"
                  className="btn rounded-md uppercase text-xs text-white bg-primary hover:bg-secondary"
                >
                  add to cart
                </button>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
export default Products
