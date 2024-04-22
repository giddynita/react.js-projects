import { useDispatch } from 'react-redux'
import { Header, Navbar, SubPages } from '../components'
import { handleSearchBar } from '../features/navbar/navbarSlice'

const Layout = () => {
  const dispatch = useDispatch()
  const handleSearchBarClick = (event) => {
    if (!event.target.classList.contains('search')) {
      dispatch(handleSearchBar({ showHide: false }))
    }
  }

  return (
    <div onClick={handleSearchBarClick}>
      <Header />
      <div className="relative w-[90%] mx-auto max-w-screen-lg">
        <Navbar />
        <SubPages />
      </div>
    </div>
  )
}
export default Layout
