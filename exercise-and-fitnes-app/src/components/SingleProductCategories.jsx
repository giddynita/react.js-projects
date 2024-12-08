import { MdArrowRight } from 'react-icons/md'
import Heading from './Heading'

const categories = ['machine', 'accessories', 'weight']

const SingleProductCategories = ({ singleProduct }) => {
  const { subCategory } = singleProduct
  return (
    <>
      <Heading text="product categories" margin="mb-3" size="text-[1rem]" />
      <ul>
        {categories.map((category, index) => {
          const active =
            category == subCategory
              ? 'bg-primary text-white'
              : 'bg-base-200/30 text-accent/60 hover:bg-base-200/60 hover:text-accent/80'
          return (
            <div key={index}>
              <li
                className={`flex items-center justify-between  mb-1 rounded-md  capitalize py-2 pl-1.5 pr-3.5 text-xs ${active} `}
              >
                <span className="flex items-center ">
                  <MdArrowRight />
                  {category}
                </span>
              </li>
            </div>
          )
        })}
      </ul>
    </>
  )
}
export default SingleProductCategories
