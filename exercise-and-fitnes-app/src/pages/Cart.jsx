import { Button, CartList, CartTotal } from '../components'
import Heading from '../components/Heading'

const Cart = () => {
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
          <CartList />
        </section>
        <section className="width">
          <Heading text="cart totals" margin="mb-3" size="text-sm" />
          <CartTotal />
          <Button
            type="button"
            customStyles="text-sm rounded h-10 w-52 my-4"
            text="proceed to checkout"
          />
        </section>
      </div>
    </>
  )
}
export default Cart
