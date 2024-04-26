import SocialIcons from './SocialIcons'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
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
          <div className=" flex items-center gap-x-1">
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
          className=" text-xs "
          style={{
            columnCount: 2,
            columnRule: '1px solid ',
            columnGap: '1rem',
          }}
        >
          <ul className="flex pt-[0.22rem] items-center gap-x-1 ">
            <SocialIcons />
          </ul>
          <Link
            to="/cart"
            className=" flex items-center gap-x-3 hover:text-primary "
          >
            <div className=" relative  ">
              <FaShoppingCart className="w-4 h-5 flex place-items-center" />

              <span className="absolute -top-[0px] -right-2 text-[10px] w-[14px] h-[14px] bg-secondary rounded-full flex items-center justify-center text-white z-10 font-bold">
                10
              </span>
            </div>
            <p className="">$0.00</p>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
