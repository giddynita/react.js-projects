import { useDispatch, useSelector } from 'react-redux'
import { Button, CartList, CartTotal } from '../components'
import { clearCart } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

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
        <section className="width mb-10">
          {numItemsInCart === 0 || (
            <div className=" mb-4 w-max">
              <Button
                type="button"
                customStyles="text-xs rounded py-1 px-2 font-semibold flex items-center gap-1  "
                text="clear cart"
                clickFunction={clear}
              />
            </div>
          )}
          <CartList />
        </section>
        {numItemsInCart === 0 || (
          <section className="width">
            <CartTotal />
            <Link to="/checkout">
              <Button
                type="button"
                customStyles="text-sm rounded h-10 sm:w-52 w-full my-4"
                text="proceed to checkout"
              />
            </Link>
          </section>
        )}
      </div>
    </>
  )
}
export default Cart
