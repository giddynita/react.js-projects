import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../features/products/productsFiltersSlice'
import Button from './Button'
import { useState } from 'react'

const SearchBar = ({ width, borderRadius, placeholder, hideButton }) => {
  const [productSearch, setProductSearch] = useState('')
  const dispatch = useDispatch()
  const handleSearchInput = (searchWord) => {
    dispatch(handleSearch({ searchWord }))
  }
  const searchButtonClick = () => handleSearchInput(productSearch)
  return (
    <div className="flex gap-x-2">
      <div className="relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
          className={`p-2 pl-7 font-normal text-xs bg-base-100 border-[1px] border-accent/15 ${width} ${borderRadius} focus:outline-none placeholder-italic search`}
          value={productSearch}
          onChange={(e) => setProductSearch(e.target.value.toLowerCase())}
          onKeyDown={(e) => {
            e.keyCode === 13 && handleSearchInput(e.target.value.toLowerCase())
          }}
        />
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-2.5 w-3 h-3 origin-center text-accent/50" />
      </div>
      {hideButton || (
        <Button
          type="button"
          text="search"
          customStyles="text-xs rounded w-20"
          clickFunction={searchButtonClick}
        />
      )}
    </div>
  )
}

export default SearchBar
