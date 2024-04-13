import { useDispatch, useSelector } from 'react-redux'
import AboutSubLinks from './AboutSubLinks'
import { useRef } from 'react'
import { fitnessCalculator, subPage } from '../features/navbar/navbarSlice'

const sublinks = {
  about: <AboutSubLinks />,
}

const SubLinks = () => {
  const subLinkRef = useRef()
  const dispatch = useDispatch()
  const page = useSelector((state) => {
    return state.navbarState.page
  })
  const pageOnHover = sublinks[page]
  const hideSubLink = (event) => {
    const subLink = subLinkRef.current
    const { left, right, bottom } = subLink.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientX < left || clientX > right || clientY > bottom - 1) {
      dispatch(subPage({ page: null }))
      dispatch(fitnessCalculator({ subpage: null }))
    }
  }
  return (
    <section
      className="absolute hidden lg:flex right-0 top-[90px] transition-transform duration-300 origin-top"
      style={{
        transform: pageOnHover ? 'rotateX(0deg)' : 'rotateX(-90deg)',
        right: page === 'about' ? '471px' : '0',
      }}
      ref={subLinkRef}
      onMouseLeave={hideSubLink}
    >
      {pageOnHover}
    </section>
  )
}
export default SubLinks
