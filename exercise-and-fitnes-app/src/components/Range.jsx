import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import { handlePriceFilter } from '../features/products/productsFiltersSlice'

const Range = ({ label, name }) => {
  const selectedPrice = useSelector((state) => state.productState.price)
  const dispatch = useDispatch()
  const handlePriceChange = (price) => {
    dispatch(handlePriceFilter({ price }))
  }
  const step = 5000
  const maxPrice = 100000
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="flex justify-between text-accent/50 font-bold mb-3 text-xs"
      >
        <span className="font-semibold text-md">min:{formatPrice(0)}</span>
        <span className="font-semibold text-md">
          max:{formatPrice(maxPrice)}
        </span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice || maxPrice}
        onChange={(e) => {
          handlePriceChange(e.target.value)
        }}
        step={step}
        className={`range range-primary range-md`}
      />
      <div
        className="w-full flex items-center  text-xs  mt-3 text-accent/50 font-semibold gap-x-1.5"
        style={{
          display: selectedPrice == 0 ? 'none' : 'flex',
        }}
      >
        <span className="capitalize">{label} range: </span>
        <span>
          {formatPrice(0)} - {formatPrice(selectedPrice)}
        </span>
      </div>
    </div>
  )
}
export default Range
