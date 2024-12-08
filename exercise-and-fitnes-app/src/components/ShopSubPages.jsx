import { Link } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'
import image from '../assets/images/img.png'
import Heading from './Heading'
import InformationColumn from './InformationSection'

export const columns = [
  {
    heading: 'equipment',
    column: [
      { text: 'machines', url: 'machines' },
      { text: 'weights', url: 'weights' },
      { text: 'accessories', url: 'accessories' },
      { text: 'custom link', url: 'custom-link' },
      { text: 'all equipments', url: 'all-equipments' },
    ],
  },
  {
    heading: 'nutrition',
    column: [
      { text: 'whey', url: 'whey' },
      { text: 'creatine', url: 'creatine' },
      { text: 'pre workout', url: 'pre-workout' },
      { text: 'post workout', url: 'post-workout' },
      { text: 'weight loss', url: 'weight-loss' },
    ],
  },
  {
    heading: 'brands',
    column: [
      { text: "ol' english", url: 'ol-english' },
      { text: 'higher', url: 'higher' },
      { text: 'on fire', url: 'on-fire' },
      { text: 'pacific standard', url: 'pacific-standard' },
      { text: 'humane labs raid', url: 'humane-labs-raid' },
    ],
  },
  {
    heading: 'account',
    column: [
      { text: 'my account', url: 'my-account' },
      { text: 'wishlist', url: 'wishlist' },
      { text: 'shopping cart', url: 'shopping-cart' },
      { text: 'checkout', url: 'checkout' },
      { text: 'order tracking', url: 'order-tracking' },
    ],
  },
  {
    heading: 'information',
    column: [
      { text: 'About the Shop', url: 'about-the-shop' },
      { text: 'Terms & Conditions', url: 'terms-conditions' },
      { text: 'Privacy Policy', url: 'privacy-policy' },
      { text: 'Delivery Information', url: 'delivery-information' },
      { text: 'F.A.Q.', url: 'f-a-q' },
    ],
  },
]
const ShopSubPages = () => {
  return (
    <div className="borderTop w-full p-6">
      <div
        className="mb-3 grid grid-cols-5"
        /* style={{
          columnCount: 5,
          columnRule: '1px solid #0000001a',
          columnGap: '4rem',
        }} */
      >
        {columns.map(({ column, heading }, index) => {
          return (
            <div
              key={index}
              className="border-r-[1px] last:border-r-0 mr-6 border-r-gray-200 pr-3"
            >
              <Heading
                text={heading}
                margin="mb-4"
                size="text-sm font-semibold"
              />
              <ul>
                {column.map(({ text, url }, index) => {
                  return (
                    <li key={index}>
                      <Link
                        /*  to={url} */
                        className=" flex items-start py-1.5 hover:bg-accent/[0.02] hover:text-accent/80 capitalize cursor-pointer"
                      >
                        <MdArrowRight className="text-[1rem]  shrink-0" />
                        <span>{text}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <figure>
        <img src={image} alt="shop" loading="lazy" />
      </figure>
    </div>
  )
}
export default ShopSubPages
