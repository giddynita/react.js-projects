import { MdArrowRight } from 'react-icons/md'
import { columns } from './ShopSubPages'
import { Link } from 'react-router-dom'

const ShopSubPage2 = () => {
  return (
    <>
      {columns.map(({ heading, column }, index) => {
        return (
          <div key={index} className="bg-gray-100 pl-3 pt-3">
            <h2 className="text-xs text-gray-400 capitalize">{heading}:</h2>
            <ul>
              {column.map(({ text, url }, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center capitalize text-xs text-gray-600 pl-1"
                  >
                    <MdArrowRight className="text-[1.2rem]" />
                    <Link
                      /* to={url} */ className="flex-1 hover:text-primary py-1.5"
                    >
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
export default ShopSubPage2
