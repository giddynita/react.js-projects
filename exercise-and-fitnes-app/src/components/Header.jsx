import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { logoutUser } from '../features/user/userSlice'
import { auth } from '../firebase/firebase.utils'
import { FaPhone } from 'react-icons/fa6'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { numItemsInCart, cartTotal } = useSelector((state) => state.cartState)
  const { user } = useSelector((state) => state.userState)
  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    auth.signOut()
    dispatch(logoutUser())
  }

  return (
    <header className="hidden md:flex py-2.5 border-b-[1px] border-accent/10">
      <div className="flex w-[90%] max-w-screen-lg items-center justify-between  mx-auto text-accent/60">
        <div className="grid grid-cols-2 gap-1">
          <div
            className=" flex
            items-center gap-x-0.5 pt-0.5 border-r border-gray-500 pr-1"
          >
            <FaPhone className="text-[0.7rem] " />
            <a
              href="tel:+2348089646300"
              className="hover:text-primary text-[0.72rem] tracking-wide "
            >
              +234 808 964 6300
            </a>
          </div>
          <div className="flex items-center gap-x-0.5 ">
            <MdEmail className="text-[0.72rem] " />
            <a
              href="mailto:info@company.com"
              className="hover:text-primary text-[0.72rem] "
            >
              info@company.com
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {user ? (
            <>
              <div className=" flex items-center justify-end border-r pr-1 border-gray-500 gap-x-3.5 text-xs">
                <Link to="/cart" className=" relative hover:text-secondary  ">
                  <div>
                    <FaShoppingCart className="w-5 h-5 flex place-items-center" />
                  </div>
                  <span className="absolute -top-[3px] -right-2 text-[10px] w-[16px] h-[16px] bg-gray-500 rounded-full flex items-center justify-center text-white z-10 font-bold">
                    {numItemsInCart}
                  </span>
                </Link>
                <p className="border border-secondary bg-secondary text-white rounded py-0.5 px-1.5 ">
                  {formatPrice(cartTotal)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 ">
                  <div className="border rounded-full bg-gray-500 text-white">
                    <FaUser className="p-0.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-right tracking-wider text-gray-800 font-semibold ">
                    {user.username}
                  </p>
                </div>
                <button
                  className="text-xs border border-primary rounded py-0.5 font-semibold hover:bg-primary hover:text-white w-14 capitalize text-gray-600"
                  onClick={handleLogout}
                >
                  logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div className=" flex items-center justify-end border-r pr-1 border-gray-500 gap-x-3.5 text-xs">
                <Link to="/cart" className=" relative hover:text-secondary  ">
                  <div>
                    <FaShoppingCart className="w-5 h-5 flex place-items-center" />
                  </div>
                  <span className="absolute -top-[3px] -right-2 text-[10px] w-[16px] h-[16px] bg-gray-500 rounded-full flex items-center justify-center text-white z-10 font-bold">
                    {numItemsInCart}
                  </span>
                </Link>
                <p className="border border-secondary bg-secondary text-white rounded py-0.5 px-1.5 ">
                  {formatPrice(cartTotal)}
                </p>
              </div>
              <div className="flex gap-x-1 justify-center items-center">
                <Link
                  to="/login"
                  className=" text-xs border border-primary rounded py-0.5 px-1.5 hover:text-white hover:bg-primary text-gray-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className=" text-xs py-0.5 px-1.5 rounded border border-secondary   hover:bg-secondary hover:text-white text-gray-600"
                >
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
