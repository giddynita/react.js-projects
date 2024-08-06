import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import Button from './Button'
import { RiErrorWarningLine } from 'react-icons/ri'

const CartList = () => {
  const { cartItems, numItemsInCart } = useSelector((state) => state.cartState)
  if (numItemsInCart === 0) {
    return (
      <>
        <div className="border border-secondary text-xs p-5 rounded-md text-accent-80 bg-secondary/20 mb-4 flex items-center gap-x-1.5 ">
          <RiErrorWarningLine className="text-lg text-secondary" /> Your cart is
          currently empty
        </div>
        <div className="text-center border border-accent/10 border-t-transparent rounded-b-2xl">
          <Link to="/shop">
            <button
              type="button"
              className="text-white bg-primary rounded-[4px] uppercase text-xs w-[8.5rem] h-9 mb-12 hover:bg-secondary"
            >
              return to shop
            </button>
          </Link>
        </div>
      </>
    )
  }
  return (
    <>
      <table className="w-full">
        <thead className="hidden md:table-header-group uppercase text-sm text-start bg-base-200/40 text-accent/70">
          <tr>
            <th className="border"></th>
            <th className="border"></th>
            <th className="p-3 border text-left text-sm">product</th>
            <th className="p-3 border text-left text-sm">price</th>
            <th className="p-3 border text-left text-sm">quantity</th>
            <th className="p-3 border text-left text-sm">subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => {
            return <CartItems key={index} cartItem={cartItem} />
          })}
        </tbody>
      </table>
      <div className=" p-6 bg-base-200/40 flex flex-wrap gap-2 border border-t-transparent rounded-b">
        <input
          type="text"
          name="coupon"
          id="coupon"
          placeholder="Coupon code"
          className="w-48 h-10 input-sm border border-base-300 focus:border-primary focus:outline-none rounded placeholder-italic"
        />
        <Button
          type="button"
          text="apply coupon"
          customStyles="w-32 h-10 text-sm rounded"
        />
      </div>
    </>
  )
}
export default CartList
