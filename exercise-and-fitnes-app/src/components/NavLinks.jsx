import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { subPage } from '../features/navbar/navbarSlice'
import { useRef } from 'react'

const navLinks = [
  { url: '/', page: 'home' },
  { url: 'about', page: 'about' },
  { url: 'classes', page: 'classes' },
  { url: 'workouts', page: 'workouts' },
  { url: 'nutrition', page: 'nutrition' },
  { url: 'features', page: 'features' },
  { url: 'shop', page: 'shop' },
  { url: 'news', page: 'news' },
  { url: 'contacts', page: 'contacts' },
]
const NavLinks = () => {
  const dispatch = useDispatch()
  const navLinkRef = useRef(null)
  const showSubLinks = (page) => {
    dispatch(subPage({ page }))
  }
  const hideNavLink = (event) => {
    const navLink = navLinkRef.current
    const { top } = navLink.getBoundingClientRect()
    const { clientY } = event
    if (clientY < top) {
      dispatch(subPage({ page: null }))
    }
  }

  return (
    <ul className="flex uppercase">
      {navLinks.map(({ url, page }) => {
        return (
          <li key={page}>
            <NavLink
              to={url}
              className=" py-4 px-2 items-stretch hover:text-primary "
              onMouseMove={() => {
                showSubLinks(page)
              }}
              ref={navLinkRef}
              onMouseLeave={hideNavLink}
            >
              {page}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
