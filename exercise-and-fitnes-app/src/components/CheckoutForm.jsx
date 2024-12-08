import { Form, redirect, useNavigation } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'
import { formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'
import Heading from './Heading'
import { createOrder } from '../firebase/firebase.utils'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const { name, address, phone } = Object.fromEntries(formData)
    const { uid } = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState

    const orderInfo = {
      name,
      address,
      phone,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    }
    if (!name || !address || !phone) {
      toast.error('incomplete information provided')
      return null
    }
    try {
      await createOrder(uid, orderInfo)
      toast.success('Order placed successfully')
      store.dispatch(clearCart())
      return redirect('/') /* redirect('/orders') */
    } catch (error) {
      console.log(error.message, error.code)
      toast.error(`${error.code}: ${error.message}`)
      return null
    }
  }
const CheckoutForm = () => {
  const navigation = useNavigation()
  return (
    <div className="min-h-screen">
      <Heading text="shipping information" margin="mb-4" size="text-sm" />
      <Form method="POST" className="flex flex-col gap-y-2">
        <FormInput
          placeholder="Enter your full name"
          name="name"
          type="text"
          label="Name"
          required="*"
        />
        <FormInput
          placeholder="Enter your shipping address"
          name="address"
          type="text"
          label="Shipping Address"
          required="*"
        />
        <FormInput
          placeholder="Enter your phone number"
          name="phone"
          type="tel"
          label="Contact Address"
          required="*"
        />
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
