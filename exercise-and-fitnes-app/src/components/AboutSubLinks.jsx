import { MdArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import FitnessCalculators from './FitnessCalculators'
import { useDispatch, useSelector } from 'react-redux'
import { fitnessCalculator } from '../features/navbar/navbarSlice'

const subpages = [
  {
    text: 'trainer',
    url: 'trainer',
  },
  {
    text: 'trainer single page',
    url: 'trainer-single-page',
  },
  {
    text: 'careers',
    url: 'careers',
  },
  {
    text: 'pricing plans',
    url: 'pricing-plans',
  },
  {
    text: 'fitness calculators',
    url: 'fitness-calculators',
  },
  {
    text: 'knowledge base',
    url: 'knowledge-base',
  },
  {
    text: 'testimonials',
    url: 'testimonials',
  },
  {
    text: 'gallery',
    url: 'gallery',
  },
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
      <ul className=" borderTop w-40">
        {subpages.map(({ text, url }, index) => {
          return (
            <li key={index}>
              <NavLink
                to={url}
                className=" flex justify-between items-center pl-3 pr-0.5 h-[35px] border-b border-accent/10 hover:bg-accent/[0.02] hover:text-accent/80"
                onMouseOver={() => {
                  showFitnessCalculators(text)
                }}
              >
                {text}
                {text === 'fitness calculators' && (
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
