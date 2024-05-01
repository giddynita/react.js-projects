import { formatPrice } from '../utils'
import { TiStarFullOutline } from 'react-icons/ti'

const TopRatedProductSection = ({ products }) => {
  return (
    <div>
      {products
        .filter((product, index) => product.topRated === true && index < 3)
        .map(({ productName, productPrice, productImage }, index) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between text-xs border-b mb-1 last:border-b-0 pb-1.5"
            >
              <div>
                <h4 className=" text-accent/60">{productName}</h4>
                <div className="flex py-0.5 text-yellow-500">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </div>
                <p className=" mt-0.5 text-accent/50 ">
                  {formatPrice(productPrice)}
                </p>
              </div>
              <figure className="w-12">
                <img src={productImage} alt={productName} />
              </figure>
            </div>
          )
        })}
    </div>
  )
}
export default TopRatedProductSection
