import { NavLink } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'
const columns = [
  {
    column: [
      'drag-n-drop page builder',
      'theme options',
      'revolution slider',
      'responsive design',
      'unlimited colors',
    ],
  },
  {
    column: [
      'parallax backgrounds',
      'video backgrounds',
      'full page photo gallery',
      'mega menu',
      'preloaders',
    ],
  },
  {
    column: [
      'font awesome icons',
      'wooCommerce compatible',
      'WPML compatible',
      'maintenance mode',
      'fitness calculators',
    ],
  },
  {
    column: [
      'galleries & carousel',
      'contact forms',
      'shortcodes',
      'headings',
      'nutrition elements',
    ],
  },
]

const FeaturesSubPages = () => {
  return (
    <div
      className=" w-full capitalize text-xs border-t-2 border-primary shadow text-black/60 rounded-st-sm p-6"
      style={{
        columnCount: 4,
        columnRule: '1px solid #0000001a',
        columnGap: '2rem',
      }}
    >
      {columns.map(({ column }) => {
        return (
          <div>
            <ul>
              {column.map((item) => {
                return (
                  <li>
                    <NavLink className=" flex items-center py-1 hover:bg-black/[0.02] hover:text-black/70">
                      <MdArrowRight className="text-lg" />
                      <span>{item}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
export default FeaturesSubPages
