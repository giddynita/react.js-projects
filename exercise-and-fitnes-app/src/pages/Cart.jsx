import { useDispatch, useSelector } from 'react-redux'
import { Button, CartList, CartTotal } from '../components'
import Heading from '../components/Heading'
import { clearCart } from '../features/cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { numItemsInCart } = useSelector((state) => state.cartState)
  const clear = () => {
    dispatch(clearCart())
  }
  return (
    <>
      <section className="bg-[url('./assets/images/shop_product_details.JPG')] h-[23vw] max-h-[180px] w-full bg-cover bg-center text-white flex justify-center flex-col ">
        <div className="uppercase width">
          <h4 className=" text-xl sm:text-3xl font-semibold sm:mb-1">Cart</h4>
          <p className=" text-xs sm:text-sm   text-gray-300 tracking-wider">
            your shopping cart
          </p>
        </div>
      </section>
      <div className="my-12">
        <section className="width mb-10 relative">
          <CartList />
          <button
            type="button"
            className="absolute -top-6 right-0 capitalize hover:underline text-secondary text-sm cursor-pointer"
            onClick={clear}
          >
            clear cart
          </button>
        </section>
        {numItemsInCart === 0 || (
          <section className="width">
            <Heading text="cart total" margin="mb-3" size="text-sm" />
            <CartTotal />
            <Button
              type="button"
              customStyles="text-sm rounded h-10 sm:w-52 w-full my-4"
              text="proceed to checkout"
            />
          </section>
        )}
      </div>
    </>
  )
}
export default Cart
