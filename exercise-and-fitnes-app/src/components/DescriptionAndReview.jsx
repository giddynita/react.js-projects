import { useDispatch, useSelector } from 'react-redux'
import { handleActiveState } from '../features/product_details/productDetailsSlice'
import DescriptionTab from './DescriptionTab'
import ReviewTab from './ReviewTab'

const buttonType = ['description', 'review']

const DescriptionAndReview = ({ singleProduct }) => {
  const { active } = useSelector((state) => state.productDetailsState)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex flex-col w-full sm:items-end sm:flex-row text-start">
        {buttonType.map((button, index) => {
          const activeStyle =
            active === button
              ? 'border-t-2 border border-accent/10 border-t-primary h-12  bg-base-100 relative z-40 text-accent/70 transition-500 -mr-1 border-b-transparent'
              : 'border-[1px] border-accent/10 h-10 bg-gray-50 relative z-50 text-accent/50 transition-500 first:border-r-transparent'

          return (
            <button
              key={index}
              type="button"
              className={`w-full sm:w-36 text-sm capitalize ${activeStyle} `}
              onClick={() => dispatch(handleActiveState({ setActive: button }))}
            >
              {button}
            </button>
          )
        })}
        <span className="border-b   sm:flex-1"> </span>
      </div>
      <div className="border-[1px] border-accent/10 p-8 pb-6 relative z-30 border-t-transparent">
        {active === 'description' && (
          <DescriptionTab singleProduct={singleProduct} />
        )}
        {active === 'review' && <ReviewTab />}
      </div>
    </div>
  )
}
export default DescriptionAndReview
