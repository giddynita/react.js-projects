import { navLinks } from '../components/NavLinks'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AboutSubLinks2 from './AboutSubLinks2'
import WorkoutSubpage2 from './WorkoutSubpage2'
import ShopSubPage2 from './ShopSubPage2'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import { FaUser } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.utils'

const SideMenu = () => {
  const [aboutDropDown, setAboutDropDown] = useState(false)
  const [workoutDropDown, setWorkoutDropDown] = useState(false)
  const [shopDropDown, setShopDropDown] = useState(false)
  const showAboutDropDown = aboutDropDown
    ? 'max-h-[22.75rem] visible'
    : 'max-h-0 invisible'
  const showWorkoutDropDown = workoutDropDown
    ? 'max-h-[29.75rem] visible'
    : 'max-h-0 invisible'
  const showShopDropDown = shopDropDown
    ? 'max-h-[29.75rem] visible'
    : 'max-h-0 invisible'
  const menu = useSelector((state) => {
    return state.sideMenuState.sideMenu
  })
  const { user } = useSelector((state) => state.userState)
  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    auth.signOut()
    dispatch(logoutUser())
  }
  const controlledNavLinks = user
    ? [
        { url: '/', page: 'home' },
        { url: 'about', page: 'about' },
        { url: 'class', page: 'classes' },
        /* { url: 'workouts', page: 'workouts' },
  { url: 'nutrition', page: 'nutrition' }, */
        { url: 'shop', page: 'shop' },
        { url: 'cart', page: 'cart' },
        { url: 'orders', page: 'orders' },
        { url: 'contact', page: 'contact' },
      ]
    : [
        { url: '/', page: 'home' },
        { url: 'about', page: 'about' },
        { url: 'class', page: 'classes' },
        /* { url: 'workouts', page: 'workouts' },
  { url: 'nutrition', page: 'nutrition' }, */
        { url: 'shop', page: 'shop' },
        { url: 'cart', page: 'cart' },
        { url: 'contact', page: 'contact' },
      ]

  return (
    <div
      className={`${
        menu ? 'ml-auto ' : ' absolute top-0 right-0 z'
      } w-[70%] sm:w-[55%] md:hidden px-5 pb-14 min-h-screen bg-accent/10 side-menu`}
    >
      <h2 className="uppercase text-lg tracking-wider text-gray-700 font-bold pt-5 mb-3.5 text-center ">
        forge<span className="bg-green-500 text-white px-1">fit</span>
      </h2>
      <>
        {user ? (
          <div className="flex items-center gap-2 justify-between mb-4">
            <div className="flex items-center gap-1.5 ">
              <div className="border rounded-full bg-gray-500 text-white">
                <FaUser className="p-0.5" />
              </div>
              <p className="text-xs sm:text-sm text-gray-800 tracking-wider font-semibold ">
                {user.username}
              </p>
            </div>
            <button
              className="text-xs border border-primary rounded py-0.5 font-semibold hover:bg-primary text-gray-600 hover:text-white w-14 capitalize"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-1 justify-end mb-4 items-center">
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
        )}
      </>

      <ul className="flex flex-col gap-1 mb-8">
        {controlledNavLinks.map(({ page, url }, index) => {
          const dropdown =
            page == 'about' || page == 'workouts' || page == 'shop'
          return (
            <li key={index}>
              <div className="flex flex-row items-center justify-between ">
                <NavLink
                  to={url}
                  className={`bg-white flex-1 capitalize text-xs text-gray-500 px-2 flex items-center page h-8 ${
                    dropdown || 'rounded'
                  } ${
                    aboutDropDown ||
                    workoutDropDown ||
                    shopDropDown ||
                    'rounded-bl'
                  }  rounded-tl`}
                >
                  {page}
                </NavLink>
                {page == 'about' && (
                  <NavLink
                    to={url}
                    className={`bg-gray-100 text-xl text-accent/50 h-8 w-8 flex items-center justify-center rounded-tr cursor-pointer arrow-up-down  ${
                      aboutDropDown || 'rounded-br'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setAboutDropDown(!aboutDropDown)
                    }}
                  >
                    {aboutDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </NavLink>
                )}
                {page == 'workouts' && (
                  <span
                    className={`bg-gray-100 text-xl text-accent/50 h-8 w-8 flex items-center justify-center rounded-tr cursor-pointer arrow-up-down  ${
                      workoutDropDown || 'rounded-br'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setWorkoutDropDown(!workoutDropDown)
                    }}
                  >
                    {workoutDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                )}
                {page == 'shop' && (
                  <span
                    className={`bg-gray-100 text-xl text-accent/50 h-8 w-8 flex items-center justify-center rounded-tr cursor-pointer arrow-up-down  ${
                      shopDropDown || 'rounded-br'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setShopDropDown(!shopDropDown)
                    }}
                  >
                    {shopDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                )}
              </div>
              {page == 'about' && (
                <div
                  className={`${showAboutDropDown} transtion duration-150 overflow-hidden  `}
                >
                  <AboutSubLinks2 />
                </div>
              )}
              {page == 'workouts' && (
                <div
                  className={`${showWorkoutDropDown} transtion duration-150 overflow-hidden `}
                >
                  <WorkoutSubpage2 />
                </div>
              )}
              {page == 'shop' && (
                <div
                  className={`${showShopDropDown} transtion duration-150 overflow-hidden `}
                >
                  <ShopSubPage2 />
                </div>
              )}
            </li>
          )
        })}
      </ul>
      {/* <div className="bg-red-100">
        <SearchBar
          width="w-full"
          borderRadius="rounded"
          placeholder="Search the site"
          hideButton
        />
      </div> */}
    </div>
  )
}
export default SideMenu
