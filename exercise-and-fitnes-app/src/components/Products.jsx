import Heading from './Heading'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'
import Button from './Button'
const Products = ({ paginatedAndFilteredProducts }) => {
  return (
    <div className="py-8 grid sm:grid-cols-3 md:grid-cols-4 gap-8">
      {paginatedAndFilteredProducts.map(
        (
          {
            image,
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
            image,
            productName,
            price: sale ? discountPrice : productPrice,
            productId,
            amount: 1,
            cartID: productId,
          }
          const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
          const dispatch = useDispatch()
          const addToCart = () => {
            dispatch(addItem({ product: cartProduct }))
            toast.success(`${capitalize(productName)} added to your cart`)
          }
          return (
            <div
              key={index}
              className="flex flex-col rounded-md relative shadow hover:shadow-md bg-gray-100/50 min-h-16 overflow-hidden "
            >
              <div className="p-4 bg-white">
                <Link to={`/shop/products/${productId}`}>
                  <figure>
                    <img
                      src={image}
                      alt={productName}
                      className="mx-auto w-24"
                      loading="lazy"
                    />
                  </figure>
                </Link>
              </div>

              <div className="text-center  rounded-b-md pb-5 pt-3 px-4">
                <Link to={`/shop/products/${productId}`}>
                  <Heading
                    text={productName}
                    size="text-[.8rem] overflow-hidden line-clamp-2 text-ellipsis"
                  />
                </Link>
                <Rating value={productRatings} align="mx-auto" />
                <Price
                  productPrice={productPrice}
                  discountPrice={discountPrice}
                  sale={sale}
                  margin="my-2"
                  size="text-[0.8rem]"
                />
                <Button
                  type="button"
                  text="add to cart"
                  customStyles="font-semibold rounded-md text-[0.65rem] py-2.5 px-3"
                  clickFunction={addToCart}
                />
              </div>
              {sale && (
                <span className="absolute top-0 right-0 bg-primary text-white uppercase text-[0.6rem] w-10 text-center py-0.5 pl-0.5 font-semibold tracking-wider">
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
