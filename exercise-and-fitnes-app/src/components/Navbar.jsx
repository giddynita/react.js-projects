import NavLinks from './NavLinks'
import { LuMenu } from 'react-icons/lu'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import { handleSearchBar } from '../features/navbar/navbarSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const searchBar = useSelector((state) => {
    return state.navbarState.searchBar
  })
  const handleSearchBarClick = () => {
    dispatch(handleSearchBar({ showHide: !searchBar }))
  }

  return (
    <nav className=" flex h-[90px] justify-between items-center ">
      {/* LOGO */}
      <h2>LOGO</h2>
      <div className="hidden lg:flex items-center gap-x-2 text-accent/80 text-sm  font-semibold">
        {/* NAVLINKS */}
        <NavLinks />
        {/* SEARCH ICON */}
        <div className="relative search">
          <FaSearch
            className="hover:text-primary cursor-pointer search"
            onClick={handleSearchBarClick}
          />
          <div
            className="bg-white absolute -right-5 p-3 border border-accent/10 top-9 z-40 origin-center search"
            style={{
              animation: searchBar && 'show 0.5s ease-out',
              opacity: searchBar ? '1' : '0',
              visibility: searchBar || 'hidden',
              transition: 'all 0.5s',
            }}
          >
            <SearchBar />
          </div>
          {
            <span
              className=" absolute border-[7px] border-transparent  border-b-white  z-50 top-[23px] origin-center "
              style={{
                animation: searchBar && 'show 0.6s linear',
                opacity: searchBar ? '1' : '0',
                transition: 'all 0.6s',
              }}
            ></span>
          }
        </div>
      </div>
      {/* MENU BUTTON */}
      <button className="border border-accent/10 hover:border-accent/20 p-2 rounded-lg lg:hidden">
        <LuMenu className="w-6 h-6" />
      </button>
    </nav>
  )
}
export default Navbar
