import { MdArrowRight } from 'react-icons/md'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import { products } from '../data'

const categories = ['equipment', 'nutrition', 'test category', 'uncategories']

const ProductCategoriesSection = () => {
  return (
    <>
      <Heading text="product categories" margin="mb-3" />
      <ul>
        {categories.map((category, index) => {
          return (
            <Link to={category} key={index}>
              <li className="flex items-center justify-between bg-base-200/30 mb-1 rounded-md text-accent/60 capitalize py-2 pl-1.5 pr-3.5 text-xs hover:bg-base-200/60 hover:text-accent/80">
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
            </Link>
          )
        })}
      </ul>
    </>
  )
}
export default ProductCategoriesSection
