import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import Heading from './Heading'

const CartTotal = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  )
  return (
    <div>
      <Heading text="cart total" margin="mb-3" size="text-sm" />
      <table className="w-full">
        <tbody>
          <tr>
            <th className="border p-3 w-1/3 uppercase text-sm text-left text-accent/70">
              subtotal
            </th>
            <td className="text-xs text-right p-3 border text-accent/60">
              {formatPrice(cartTotal)}
            </td>
          </tr>
          <tr>
            <th className="border p-3 w-1/3 uppercase text-sm text-left text-accent/70">
              shipping
            </th>
            <td className="text-xs text-right p-3 border text-accent/60">
              <p>Flat Rate: {formatPrice(shipping)}</p>
            </td>
          </tr>
          <tr>
            <th className="border p-3 w-1/3 uppercase text-sm text-left text-accent/70">
              state tax
            </th>
            <td className="text-xs text-right p-3 border text-accent/60">
              {formatPrice(tax)}
            </td>
          </tr>
          <tr className="bg-base-200/40">
            <th className="border p-3 w-1/3 uppercase text-sm text-left text-accent/70">
              total
            </th>
            <td className="text-xs text-right p-3 border text-accent/90">
              {formatPrice(orderTotal)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CartTotal
