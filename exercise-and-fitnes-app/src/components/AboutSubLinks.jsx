import { MdArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import FitnessCalculators from './FitnessCalculators'
import { useDispatch, useSelector } from 'react-redux'
import { fitnessCalculator } from '../features/navbar/navbarSlice'

const subpages = [
  'trainer',
  'trainer single page',
  'careers',
  'pricing plans',
  'fitness calculators',
  'knowledge base',
  'testimonials',
  'gallery',
]
const AboutSubLinks = () => {
  const dispatch = useDispatch()
  const showFitnessCalculators = (subpage) => {
    dispatch(fitnessCalculator({ subpage }))
  }
  const subpage = useSelector((state) => {
    return state.navbarState.subpage
  })

  return (
    <div className="relative">
      <ul className=" capitalize text-xs border-t-2 border-primary w-40 shadow text-black/60 rounded-t-sm">
        {subpages.map((subpage, index) => {
          return (
            <li key={index}>
              <NavLink
                className=" flex justify-between items-center pl-3 pr-0.5 h-[35px] border-b border-black/10 hover:bg-black/[0.02] hover:text-black/70"
                onMouseOver={() => {
                  showFitnessCalculators(subpage)
                }}
              >
                {subpage}
                {subpage === 'fitness calculators' && (
                  <MdArrowRight className="text-lg" />
                )}
              </NavLink>
            </li>
          )
        })}
      </ul>
      {subpage === 'fitness calculators' && <FitnessCalculators />}
    </div>
  )
}
export default AboutSubLinks
