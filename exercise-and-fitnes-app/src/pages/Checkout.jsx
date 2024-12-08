import { useAuthState } from 'react-firebase-hooks/auth'
import { CartTotal, CheckoutForm } from '../components'
import { auth } from '../firebase/firebase.utils'

const Checkout = () => {
  return (
    <>
      <section className="bg-[url('./assets/images/shop_product_details.JPG')] h-[23vw] max-h-[180px] w-full bg-cover bg-center text-white flex justify-center flex-col">
        <div className="uppercase width">
          <h4 className=" text-xl sm:text-3xl font-semibold sm:mb-1">
            Checkout
          </h4>
          <p className=" text-xs sm:text-sm   text-gray-300 tracking-wider">
            place your order
          </p>
        </div>
      </section>
      <section className="width my-12 grid md:grid-cols-2 gap-y-8 gap-x-12">
        <CheckoutForm />
        <CartTotal />
      </section>
    </>
  )
}
export default Checkout
