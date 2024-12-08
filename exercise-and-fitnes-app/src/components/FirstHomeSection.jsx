import { Link } from 'react-router-dom'
import { Button, Heading } from '../components'
import { FaGraduationCap, FaRocket } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { comingSoon } from '../utils'
const dataArray = [
  {
    heading: 'workout routines',
    subheading: 'Build Muscles / Burn Fat',
    desc: 'With Winner Theme you can easily and nicely show workout routines - one of the most searched fitness topics on the web.',
    btn: 'learn more',
    link: '/',
    icon: <FaRocket />,
  },
  {
    heading: 'fitness classes',
    subheading: 'Find your fit with your group',
    desc: 'If you are running gym, you can use the Winner services Custom Post Type to display your gym classes.',
    btn: 'learn more',
    link: 'class',
    icon: <FaGraduationCap />,
  },
  {
    heading: 'online shop',
    subheading: 'Fuel your ambition',
    desc: "Winner Theme is fully compatible with WooCommerce - the world's favorite eCommerce solution. Start selling now!",
    btn: 'learn more',
    link: 'shop',
    icon: <FaShoppingCart />,
  },
]

const FirstHomeSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-5">
      {dataArray.map(
        ({ heading, subheading, desc, btn, link, icon }, index) => {
          return (
            <div
              key={index}
              className="text-center border rounded-md p-6 h-max"
            >
              <div className="text-3xl text-accent/80 w-max mx-auto mb-2.5 mt-1">
                {icon}
              </div>
              <Heading text={heading} margin="mb-0.5" size="text-sm" />
              <p className="text-primary text-sm">{subheading}</p>
              <p className="text-accent/70 text-sm py-3 ">{desc}</p>
              <Link to={`/${link}`}>
                <Button
                  type="button"
                  customStyles="text-xs w-28 p-3 rounded"
                  text={btn}
                  clickFunction={link == '/' && comingSoon}
                />
              </Link>
            </div>
          )
        }
      )}
    </div>
  )
}
export default FirstHomeSection
