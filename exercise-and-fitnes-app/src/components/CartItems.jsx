import { MdCancel } from 'react-icons/md'
import { formatPrice, generateAmountOptions } from '../utils'
import { useDispatch } from 'react-redux'
import { editItem, removeItem } from '../features/cart/cartSlice'
const CartItems = ({ cartItem }) => {
  const { productImage, productName, price, amount, cartID } = cartItem
  const dispatch = useDispatch()
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  }
  const remove = () => {
    console.log('removed')
    dispatch(removeItem({ cartID }))
  }
  return (
    <tr>
      <td className="border relative w-[10%] md:w-[5%] rounded-[10px] p-3">
        <MdCancel
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-[1.3] text-accent/30 cursor-pointer hover:text-secondary"
          onClick={remove}
        />
      </td>
      <td className="w-[10%] border hidden p-3 md:table-cell">
        <img
          src={productImage}
          alt={productImage}
          className="w-10 h-10 mx-auto"
          loading="lazy"
        />
      </td>
      <td className="border p-3 text-primary text-xs">{productName}</td>
      <td className="border p-3 w-[10%] text-xs hidden md:table-cell text-xs">
        <p>{formatPrice(price)}</p>
      </td>
      <td className="border p-3 w-[30%] sm:w-[20%]  md:w-[15%] text-xs">
        <select
          name="amount"
          id="amount"
          className=" select  select-bordered rounded-md select-sm w-full focus:border-none focus:outline-primary"
          value={amount}
          onChange={handleAmount}
        >
          {generateAmountOptions(amount + 5)}
        </select>
      </td>
      <td className="border p-3 text-xs text-accent/80 font-semibold w-[25%] sm:w-[15%] md:w-[10%]">
        <p>{formatPrice(price * amount)}</p>
      </td>
    </tr>
  )
}
export default CartItems
