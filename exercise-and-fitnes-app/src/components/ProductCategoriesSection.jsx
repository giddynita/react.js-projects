import { MdArrowRight } from 'react-icons/md'
import Heading from './Heading'
import { Link, useLoaderData } from 'react-router-dom'

const categories = ['machine', 'accessories', 'weight']

const ProductCategoriesSection = ({ activeCategory }) => {
  const { productsList } = useLoaderData()
  return (
    <>
      <Heading text="product categories" margin="mb-3" size="text-[1rem]" />
      <ul>
        {categories.map((category, index) => {
          const active =
            category == activeCategory
              ? 'bg-primary text-white'
              : 'bg-base-200/30 text-accent/60 hover:bg-base-200/60 hover:text-accent/80'
          return (
            <Link to={`/shop/product-category/${category}`} key={index}>
              <li
                className={`flex items-center justify-between  mb-1 rounded-md  capitalize py-2 pl-1.5 pr-3.5 text-xs ${active} `}
              >
                <span className="flex items-center ">
                  <MdArrowRight />
                  {category}
                </span>
                <span>
                  (
                  {
                    productsList.filter(
                      (product) => product.subCategory == category
                    ).length
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
