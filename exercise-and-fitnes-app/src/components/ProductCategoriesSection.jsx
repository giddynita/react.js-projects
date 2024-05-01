import { MdArrowRight } from 'react-icons/md'
import Heading from './Heading'

const categories = ['equipment', 'nutrition', 'test category', 'uncategories']

const ProductCategoriesSection = ({ products }) => {
  return (
    <>
      <Heading text="product categories" margin="mb-3" />
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between bg-base-200/30 mb-1 rounded-sm text-accent/60 capitalize py-1.5 pl-1.5 pr-3.5 text-xs"
            >
              <span className="flex items-center ">
                <MdArrowRight />
                {category}
              </span>
              <span>
                (
                {
                  products.filter((product) => product.category === category)
                    .length
                }
                )
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ProductCategoriesSection
