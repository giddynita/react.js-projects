import NavLinks from './NavLinks'
import { LuMenu } from 'react-icons/lu'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center ">
      {/* LOGO */}
      <h2>LOGO</h2>
      <div className="py-4 hidden lg:flex items-center gap-x-2 font-semibold text-black/60 text-sm tracking-tight ">
        {/* NAVLINKS */}
        <NavLinks />
        {/* SEARCH ICON */}
        <FaSearch className="hover:text-primary cursor-pointer" />
      </div>
      {/* MENU BUTTON */}
      <button className="border border-black/10 hover:border-black/20 p-2 rounded-lg lg:hidden">
        <LuMenu className="w-6 h-6" />
      </button>
    </nav>
  )
}
export default Navbar
