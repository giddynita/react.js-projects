import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleNavLinksWidth, subPage } from '../features/navbar/navbarSlice'
import { useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.utils'

export const navLinks = [
  { url: '/', page: 'home' },
  { url: 'about', page: 'about' },
  { url: 'class', page: 'classes' },
  /* { url: 'workouts', page: 'workouts' },
  { url: 'nutrition', page: 'nutrition' }, */
  { url: 'shop', page: 'shop' },

  { url: 'orders', page: 'orders' },
  { url: 'contact', page: 'contact' },
]
const NavLinks = () => {
  const [user] = useAuthState(auth)
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

  const dispatch = useDispatch()
  const navLinkRef = useRef(null)
  const showSubPages = (page) => {
    dispatch(subPage({ page }))
  }
  const hideNavLink = (event) => {
    const navLink = navLinkRef.current
    const { top, right, left } = navLink.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientY < top || clientX > right || clientX < left) {
      dispatch(subPage({ page: null }))
    }
  }
  const getNavLinksWidth = () => {
    const navLink = navLinkRef.current
    const { width } = navLink.getBoundingClientRect()
    dispatch(handleNavLinksWidth({ width }))
  }
  return (
    <ul
      className="flex uppercase"
      ref={navLinkRef}
      onMouseLeave={hideNavLink}
      onMouseEnter={getNavLinksWidth}
    >
      {controlledNavLinks.map(({ url, page }) => {
        const handleCart = page == 'cart' && 'md:hidden'
        return (
          <li key={page}>
            <NavLink
              to={url}
              className={`grid items-center py-8   items-stretch hover:text-primary ${
                page == 'contact' ? 'pl-2' : 'px-2'
              }  ${handleCart}`}
              onMouseMove={() => {
                showSubPages(page)
              }}
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
