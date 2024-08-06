import { Link } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'

const categories = [
  {
    main: 'equipment',
    subcategory: ['machines', 'accessories', 'weights'],
  },
  {
    main: 'nutrition',
    subcategory: ['whey', 'creatine'],
  },
]
const SubCategories = ({ category, products, subcat }) => {
  return categories.map(({ main, subcategory }, index) => {
    const background =
      !subcat && main === category
        ? 'bg-primary text-white '
        : 'bg-base-200/30 text-accent/60 hover:bg-base-200/60 hover:text-accent/80'

    return (
      <div key={index}>
        <Link
          to={`/shop/product-category/${main}`}
          className={`flex items-center justify-between mb-1 rounded-md capitalize py-2 pl-1.5 pr-3.5 text-xs cursor-pointer ${background}`}
        >
          <span className="flex items-center">
            <MdArrowRight className="text-sm" />
            {main}
          </span>
          <span>
            {products.filter((product) => product.category === main).length}
          </span>
        </Link>
        <ul>
          {main === category &&
            subcategory.map((subcategory, index) => {
              const background2 =
                subcategory === subcat
                  ? 'bg-primary text-white '
                  : 'bg-base-200/30 text-accent/60 hover:bg-base-200/60 hover:text-accent/80'
              return (
                <Link
                  to={`/shop/product-category/${main}/${subcategory}`}
                  key={index}
                >
                  <li
                    className={`flex items-center justify-between mb-1 rounded-md capitalize py-2 pl-1.5 pr-3.5 text-xs ml-3 ${background2} cursor-pointer`}
                  >
                    <span className="flex items-center">
                      <MdArrowRight className="text-sm" />
                      {subcategory}
                    </span>
                    <span>
                      {
                        products.filter(
                          (product) => product.subCategory === subcategory
                        ).length
                      }
                    </span>
                  </li>
                </Link>
              )
            })}
        </ul>
      </div>
    )
  })
}
export default SubCategories
