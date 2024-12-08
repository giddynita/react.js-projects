import { MdArrowRight } from 'react-icons/md'
import { aboutSubpages } from './AboutSubLinks'
import { Link } from 'react-router-dom'
import { fitnessCalculators } from './FitnessCalculators'

const AboutSubLinks2 = () => {
  return (
    <div className="bg-gray-100">
      {aboutSubpages.map(({ text, url }, index) => {
        return (
          <ul key={index + 1}>
            <li className="flex items-center capitalize text-xs text-gray-600 pl-1">
              <MdArrowRight className="text-[1.2rem]" />
              <Link to={url} className="flex-1 hover:text-primary py-1.5">
                {text}
              </Link>
            </li>
            {text == 'fitness calculators' &&
              fitnessCalculators.map(({ text, url }, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center capitalize text-xs text-gray-600 pl-4"
                  >
                    <MdArrowRight className="text-[1.2rem]" />
                    <Link
                      /* to={url} */ className="flex-1 hover:text-primary py-1.5"
                    >
                      {text}
                    </Link>
                  </li>
                )
              })}
          </ul>
        )
      })}
    </div>
  )
}
export default AboutSubLinks2
