import { formatPrice } from '../utils'

const Price = ({ sale, productPrice, discountPrice, size, margin }) => {
  return (
    <p className={`text-primary ${margin} ${size}`}>
      {sale ? (
        <>
          <span className="line-through text-accent/30 mr-1">
            {formatPrice(productPrice)}
          </span>
          {formatPrice(discountPrice)}
        </>
      ) : (
        <>{formatPrice(productPrice)} </>
      )}
    </p>
  )
}
export default Price
