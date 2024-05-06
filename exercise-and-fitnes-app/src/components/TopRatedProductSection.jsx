import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import { TiStarFullOutline } from 'react-icons/ti'

const TopRatedProductSection = () => {
  const totalProducts = useSelector((state) => {
    return state.productState.totalProducts
  })
  return (
    <div>
      {totalProducts
        .filter((product, index) => product.topRated === true && index < 3)
        .map(({ productName, productPrice, productImage }, index) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between text-xs border-b mb-1 last:border-b-0 pb-1.5"
            >
              <div>
                <h4 className=" text-accent/80">{productName}</h4>
                <div className="flex pt-0.5 pb-1 text-yellow-500">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </div>
                <p className=" text-accent/50 ">{formatPrice(productPrice)}</p>
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
