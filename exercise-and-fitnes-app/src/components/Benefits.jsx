import { FaRegMoneyBill1 } from 'react-icons/fa6'
import Heading from './Heading'
import { MdLocalShipping } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'

const data = [
  {
    icon: <FaRegMoneyBill1 />,
    heading: 'money back',
    subheading: '100% money back guarantee',
  },
  {
    icon: <MdLocalShipping />,
    heading: 'free shipping',
    subheading: 'On all orders over $99',
  },
  {
    icon: <BiSupport />,
    heading: 'support 24/7',
    subheading: 'Free online support 365/year',
  },
]

const Benefits = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {data.map(({ icon, heading, subheading }, index) => {
        return (
          <div
            key={index}
            className="flex border-[1px] border-accent/10 rounded-md flex-start gap-3.5 px-5 py-3"
          >
            <span className="text-4xl text-accent/60"> {icon}</span>
            <div>
              <Heading text={heading} margin="mb-1" size="text-sm" />
              <p className="text-sm text-accent/60">{subheading}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Benefits
