import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Heading from './Heading'

const infoSection = {
  heading: 'information',
  column: [
    { text: 'About the Shop', url: 'about-the-shop' },
    { text: 'Terms & Conditions', url: 'terms-conditions' },
    { text: 'Privacy Policy', url: 'privacy-policy' },
    { text: 'Delivery Information', url: 'delivery-information' },
    { text: 'F.A.Q.', url: 'f-a-q' },
  ],
}
const InformationSection = () => {
  return (
    <>
      <Heading text={infoSection.heading} margin="mb-3" />
      <ul>
        {infoSection.column.map(({ text, url }, index) => {
          return (
            <li key={index}>
              <Link
                to={url}
                className="flex items-center py-1.5 text-accent/70  hover:text-secondary text-primary w-max"
              >
                <MdArrowRight className="text-[1rem] text-accent/80" />
                <span>{text}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default InformationSection
