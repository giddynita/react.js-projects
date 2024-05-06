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
  { url: 'blog', page: 'blog' },
  { url: 'contacts', page: 'contacts' },
]
const NavLinks = () => {
  const dispatch = useDispatch()
  const navLinkRef = useRef(null)
  const showSubPages = (page) => {
    dispatch(subPage({ page }))
  }
  const hideNavLink = (event) => {
    const navLink = navLinkRef.current
    const { top, right } = navLink.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientY < top || clientX > right) {
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
              className=" grid items-center py-8 px-2 items-stretch hover:text-primary"
              onMouseMove={() => {
                showSubPages(page)
              }}
              ref={navLinkRef}
              onMouseLeave={hideNavLink}
              style={{
                fontFamily: "'Exo 2', sans-serif",
              }}
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
