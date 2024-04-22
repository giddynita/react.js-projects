import { NavLink } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'
const columns = [
  {
    column: [
      { text: 'drag-n-drop page builder', url: 'drag-n-drop-page-builder' },
      { text: 'theme options', url: 'theme-options' },
      { text: 'revolution slider', url: 'revolution-slider' },
      { text: 'responsive design', url: 'responsive-design' },
      { text: 'unlimited colors', url: 'unlimited-colors' },
    ],
  },
  {
    column: [
      { text: 'parallax backgrounds', url: 'parallax-backgrounds' },
      { text: 'video backgrounds', url: 'video-backgrounds' },
      { text: 'full page photo gallery', url: 'full-page-photo-gallery' },
      { text: 'mega menu', url: 'mega-menu' },
      { text: 'preloaders', url: 'preloaders' },
    ],
  },
  {
    column: [
      { text: 'font awesome icons', url: 'font-awesome-icons' },
      { text: 'wooCommerce compatible', url: 'wooCommerce-compatible' },
      { text: 'WPML compatible', url: 'WPML-compatible' },
      { text: 'maintenance mode', url: 'maintenance-mode' },
      { text: 'fitness calculators', url: 'fitness-calculators' },
    ],
  },
  {
    column: [
      { text: 'galleries & carousel', url: 'galleries-carousel' },
      { text: 'contact forms', url: 'contact-forms' },
      { text: 'shortcodes', url: 'shortcodes' },
      { text: 'headings', url: 'headings' },
      { text: 'nutrition elements', url: 'nutrition-elements' },
    ],
  },
]

const FeaturesSubPages = () => {
  return (
    <div
      className=" w-full borderTop p-6"
      style={{
        columnCount: 4,
        columnRule: '1px solid #0000001a',
        columnGap: '2rem',
      }}
    >
      {columns.map(({ column }, index) => {
        return (
          <div key={index}>
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
  )
}
export default FeaturesSubPages
