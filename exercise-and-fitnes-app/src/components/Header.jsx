import SocialIcons from './SocialIcons'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { logoutUser } from '../features/user/userSlice'
import { auth } from '../firebase/firebase.utils'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { numItemsInCart, cartTotal } = useSelector((state) => state.cartState)
  const user = useSelector((state) => state.userState.user)

  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    auth.signOut()
    dispatch(logoutUser())
  }
  return (
    <header className="hidden sm:flex py-2.5 border-b-[1px] border-accent/10">
      <div className="flex w-[90%] max-w-screen-lg items-center justify-between  mx-auto text-accent/60">
        <div
          style={{
            columnCount: 2,
            columnRule: '1px solid',
          }}
        >
          <div
            className=" flex
            items-center gap-x-1 "
          >
            <BsFillTelephoneFill className="text-[0.7rem] " />
            <a
              href="tel:+2348089646300"
              className="hover:text-primary text-[0.72rem] tracking-wide "
            >
              +234 808 964 6300
            </a>
          </div>
          <div className="flex items-center gap-x-1">
            <MdEmail className="text-[0.9rem] " />
            <a
              href="mailto:info@company.com"
              className="hover:text-primary text-[0.72rem] "
            >
              info@company.com
            </a>
          </div>
        </div>
        <div
          className="items-center"
          style={{
            columnCount: 2,
            columnRule: '1px solid',
          }}
        >
          {user ? (
            <>
              <p className="text-xs sm:text-sm text-right tracking-wider pt-0.5">
                Hello, <span className="text-secondary ">{user.name}</span>
              </p>
              <div className="flex items-center gap-x-2.5 ">
                <Link
                  to="/cart"
                  className=" flex items-center gap-x-3 hover:text-primary text-xs "
                >
                  <div className=" relative ">
                    <FaShoppingCart className="w-4 h-5 flex place-items-center" />

                    <span className="absolute -top-[0px] -right-2 text-[10px] w-[14px] h-[14px] bg-secondary rounded-full flex items-center justify-center text-white z-10 font-bold">
                      {numItemsInCart}
                    </span>
                  </div>
                  <p className="">{formatPrice(cartTotal)}</p>
                </Link>
                <button
                  className="text-xs border border-primary rounded py-0.5 font-semibold hover:bg-primary hover:text-white w-14"
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end">
                <Link
                  to="/cart"
                  className=" flex  items-center gap-x-3.5 hover:text-primary  text-xs cursor-pointer"
                >
                  <div className=" relative ">
                    <FaShoppingCart className="w-4 h-5 flex place-items-center" />

                    <span className="absolute -top-[0px] -right-2 text-[10px] w-[14px] h-[14px] bg-secondary rounded-full flex items-center justify-center text-white z-10 font-bold">
                      {numItemsInCart}
                    </span>
                  </div>
                  <p className="">{formatPrice(cartTotal)}</p>
                </Link>
              </div>

              <div className="flex gap-x-2 justify-center items-center pt-0.5">
                <Link
                  to="/login"
                  className="link link-hover text-xs sm: text-sm"
                >
                  Sign in
                </Link>
                <p className="text-xs sm: text-sm">or</p>
                <Link
                  to="/register"
                  className="link link-hover text-xs sm: text-sm"
                >
                  Create Account
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
