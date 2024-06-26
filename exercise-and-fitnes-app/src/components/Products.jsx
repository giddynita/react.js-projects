import Heading from './Heading'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'
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
            productId,
          },
          index
        ) => {
          const cartProduct = {
            productImage,
            productName,
            price: sale ? discountPrice : productPrice,
            productId,
            amount: 1,
            cartID: productId,
          }
          const dispatch = useDispatch()
          const addToCart = () => {
            dispatch(addItem({ product: cartProduct }))
            toast.success(`${productName} added to your cart`)
          }
          return (
            <div
              key={index}
              className="flex flex-col rounded-md relative overflow-hidden h-max shadow hover:shadow-md  bg-gray-100/50"
            >
              <Link to={`/shop/products/${productId}`}>
                <figure className="p-1">
                  <img
                    src={productImage}
                    alt={productName}
                    className="mx-auto"
                    loading="lazy"
                  />
                </figure>
              </Link>
              <div className="text-center bg-base-100 rounded-b-md pb-5 pt-3">
                <Link to={`/shop/products/${productId}`}>
                  <Heading text={productName} />
                </Link>
                <Rating productRatings={productRatings} align="mx-auto" />
                <Price
                  productPrice={productPrice}
                  discountPrice={discountPrice}
                  sale={sale}
                  margin="my-2"
                  size="text-[0.8rem]"
                />
                <button
                  type="button"
                  className="font-semibold rounded-md uppercase text-[0.65rem] text-white bg-primary hover:bg-secondary py-2.5 px-3"
                  onClick={addToCart}
                >
                  add to cart
                </button>
              </div>
              {sale && (
                <span className="absolute top-3 -right-6 bg-primary text-white uppercase text-xs rotate-45 w-24 text-center py-0.5 pl-0.5 font-semibold tracking-wider">
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
