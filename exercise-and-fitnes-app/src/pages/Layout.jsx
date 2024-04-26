import { useDispatch } from 'react-redux'
import { Header, Loading, Navbar, SubPages } from '../components'
import { handleSearchBar } from '../features/navbar/navbarSlice'
import { Outlet, useNavigation } from 'react-router-dom'

const Layout = () => {
  const dispatch = useDispatch()
  const handleSearchBarClick = (event) => {
    if (!event.target.classList.contains('search')) {
      dispatch(handleSearchBar({ showHide: false }))
    }
  }
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <div onClick={handleSearchBarClick}>
      <Header />
      <section className="relative w-[90%] mx-auto max-w-screen-lg">
        <Navbar />
        <SubPages />
      </section>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </div>
  )
}
export default Layout
