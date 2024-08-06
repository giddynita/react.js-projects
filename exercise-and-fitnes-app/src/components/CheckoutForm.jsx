import { Form, redirect, useNavigation } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'
import { formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'
import Heading from './Heading'

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    /*  const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    }
    try {
      const response = await customFetch.post(
        '/orders',
        {
          data: info,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart())
      toast.success('order placed successfully')
      return redirect('/orders')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error?.response?.status === 401 || 403) {
        return redirect('/login')
      } 
      return null
    } */
    return null
  }
const CheckoutForm = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Heading text="shipping information" margin="" size="text-sm" />
      <Form method="POST" className="flex flex-col gap-y-2">
        <FormInput placeholder="Name" name="name" type="text" />
        <FormInput placeholder="Shipping Address" name="address" type="text" />
        <div className="mt-4">
          <SubmitButton
            text="place your order"
            texting="placing your order"
            navigation={navigation}
          />
        </div>
      </Form>
    </div>
  )
}
export default CheckoutForm
