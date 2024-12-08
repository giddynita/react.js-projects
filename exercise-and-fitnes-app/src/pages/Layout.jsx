import { useDispatch, useSelector } from 'react-redux'
import { Header, Loading, Navbar, SideMenu, SubPages } from '../components'
import { handleSearchBar } from '../features/navbar/navbarSlice'
import { Outlet, useNavigation } from 'react-router-dom'
import { handleSideMenu } from '../features/side_menu/sideMenuSlice'

const Layout = () => {
  const dispatch = useDispatch()
  const handleSearchBarClick = (event) => {
    if (!event.target.classList.contains('search')) {
      dispatch(handleSearchBar({ showHide: false }))
    }
  }
  const handleMenuClose = (event) => {
    if (!event.target.classList.contains('side-menu')) {
      dispatch(handleSideMenu({ sideMenuStatus: false }))
    }
  }
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  const menu = useSelector((state) => {
    return state.sideMenuState.sideMenu
  })

  const main = menu
    ? 'fixed top-0 -translate-x-[70%] sm:-translate-x-[55%] md:translate-x-0'
    : 'translate-x-0'

  return (
    <div className="relative scrollable">
      <div
        onClick={handleSearchBarClick && handleMenuClose}
        className={`${main} min-h-screen  w-full  transition duration-300 bg-gray-50`}
      >
        <Header />
        <section className=" w-[90%] mx-auto max-w-screen-lg">
          <Navbar />
          {/*  <SubPages /> */}
        </section>
        {isPageLoading ? (
          <Loading />
        ) : (
          <section>
            <Outlet />
          </section>
        )}
      </div>
      <>
        <SideMenu />
      </>
    </div>
  )
}
export default Layout
