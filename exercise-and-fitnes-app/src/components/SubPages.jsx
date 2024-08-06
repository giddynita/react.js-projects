import { useDispatch, useSelector } from 'react-redux'
import AboutSubLinks from './AboutSubLinks'
import { useRef } from 'react'
import { fitnessCalculator, subPage } from '../features/navbar/navbarSlice'
import FeaturesSubPages from './FeaturesSubPages'
import ShopSubPages from './ShopSubPages'
import WorkoutsSubPage from './WorkoutsSubPage'
import ContactSubPage from './ContactSubPage'
import BlogSubPage from './BlogSubPage'

const subpages = {
  about: <AboutSubLinks />,
  features: <FeaturesSubPages />,
  shop: <ShopSubPages />,
  workouts: <WorkoutsSubPage />,
  blog: <BlogSubPage />,
  contact: <ContactSubPage />,
}

const SubPages = () => {
  const subLinkRef = useRef()
  const dispatch = useDispatch()
  const page = useSelector((state) => {
    return state.navbarState.page
  })
  const pageOnHover = subpages[page]
  const hideSubLink = (event) => {
    const subLink = subLinkRef.current
    const { left, right, bottom } = subLink.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientX < left || clientX > right || clientY > bottom - 1) {
      dispatch(subPage({ page: null }))
      dispatch(fitnessCalculator({ subpage: [{}] }))
    }
  }
  return (
    <section
      className="absolute hidden lg:flex right-0  top-[90px] transition-transform duration-300 origin-top  text-xs text-accent/70 bg-base-100 z-40"
      style={{
        transform: pageOnHover ? 'rotateX(0deg)' : 'rotateX(-90deg)',
        right: page === 'about' ? '400px' : '0',
        left: page === 'about' ? ' ' : '0',
      }}
      ref={subLinkRef}
      onMouseLeave={hideSubLink}
    >
      {pageOnHover}
    </section>
  )
}
export default SubPages
