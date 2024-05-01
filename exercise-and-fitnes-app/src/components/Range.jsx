import { useState } from 'react'
import { formatPrice } from '../utils'

const Range = ({ label, name, size, price }) => {
  const step = 10000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="flex justify-between text-accent/60 font-bold mb-2"
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
        value={selectedPrice}
        onChange={(e) => {
          setSelectedPrice(e.target.value)
        }}
        step={step}
        className={`range range-primary range-md`}
      />
      <div className="w-full flex items-center  text-sm  mt-2 text-accent/60 font-semibold gap-x-1.5">
        <span className="capitalize">{label}:</span>
        <span className="text-primary">{formatPrice(selectedPrice)}</span>
      </div>
      <button
        type="button"
        className=" text-sm text-white bg-primary py-2 px-4 rounded-md mt-4 tracking-wider hover:bg-secondary"
      >
        Filter
      </button>
    </div>
  )
}
export default Range
