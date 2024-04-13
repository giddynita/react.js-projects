import SocialIcons from './SocialIcons'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="  border-b-[1px] border-black/10">
      <div className="hidden sm:flex w-[90%] max-w-screen-lg items-center justify-between   mx-auto text-black/50">
        <div className="flex items-center gap-x-2.5  text-xs">
          <div className="flex items-center gap-x-1">
            <BsFillTelephoneFill />
            <a href="tel:+2348089646300" className="hover:text-primary">
              +234 808 9646 300
            </a>
          </div>
          <div className="flex items-center gap-x-1 ">
            <MdEmail />
            <a href="mailto:info@company.com" className="hover:text-primary">
              info@company.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-2.5 text-sm py-1">
          <ul className="flex items-center gap-x-0.5">
            <SocialIcons />
          </ul>
          |
          <NavLink
            to="/cart"
            className="flex items-center gap-x-2 hover:text-primary"
          >
            <div className="py-2 relative ">
              <FaShoppingCart className="grid place-items-center w-5 h-5" />
              <span className="absolute top-0.5 -right-1/4 text-xs bg-primary rounded-full w-3.5 h-3.5 flex items-center justify-center text-white">
                3
              </span>
            </div>
            <p>$0.00</p>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header
