import { MdArrowRight } from 'react-icons/md'
import { Link, useLoaderData } from 'react-router-dom'

const data = [
  {
    category: 'equipment',
    subcategory: ['machines', 'accessories', 'weights'],
  },
  {
    category: 'nutrition',
    subcategory: ['whey', 'creatine'],
  },
]

const ProductSubCategories = () => {
  const { singleProduct } = useLoaderData()
  const { subCategory } = singleProduct
  return data.map(({ category, subcategory }, index) => {
    return (
      <div key={index}>
        <Link className="flex items-center bg-base-200/30 mb-1 rounded-md text-accent/60 capitalize py-2 pl-1.5 pr-3.5 text-xs hover:bg-base-200/60 hover:text-accent/80">
          <MdArrowRight className="text-sm" />
          {category}
        </Link>
        <ul>
          {subcategory.map((item, index) => {
            const background =
              item === subCategory
                ? 'bg-primary text-white '
                : 'bg-base-200/30 text-accent/60 hover:bg-base-200/60 hover:text-accent/80'
            return (
              <Link key={index}>
                {subcategory.includes(subCategory) && (
                  <li
                    className={`flex items-center justify-between  mb-1 rounded-md capitalize py-2 pl-1.5 pr-3.5 text-xs  ml-3 ${background}`}
                  >
                    <span className="flex items-center">
                      <MdArrowRight className="text-sm" />
                      {item}
                    </span>
                  </li>
                )}
              </Link>
            )
          })}
        </ul>
      </div>
    )
  })
}
export default ProductSubCategories
