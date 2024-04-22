import { NavLink } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'
import image from '../assets/images/img.png'

const columns = [
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
      { text: 'about the shop', url: 'about-the-shop' },
      { text: 'terms & conditions', url: 'terms-conditions' },
      { text: 'privacy policy', url: 'privacy-policy' },
      { text: 'delivery information', url: 'delivery-information' },
      { text: 'F.A.Q.', url: 'f-a-q' },
    ],
  },
]
const ShopSubPages = () => {
  return (
    <div className="borderTop w-full p-6">
      <div
        className="mb-6"
        style={{
          columnCount: 5,
          columnRule: '1px solid #0000001a',
          columnGap: '4rem',
        }}
      >
        {columns.map(({ column, heading }, index) => {
          return (
            <div key={index}>
              <h3 className="uppercase pb-4 font-semibold text-accent/80">
                {heading}
              </h3>
              <ul>
                {column.map(({ text, url }, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={url}
                        className=" flex items-center py-1.5 hover:bg-accent/[0.02] hover:text-accent/70"
                      >
                        <MdArrowRight className="text-[1rem]" />
                        <span>{text}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <NavLink to="shop">
        <img src={image} alt="shop" />
      </NavLink>
    </div>
  )
}
export default ShopSubPages
