import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search the site..."
        className="p-2 pl-7 font-normal text-xs bg-base-100 border-[1px] border-accent/15 w-72  focus:outline-none placeholder-italic search"
      />
      <FaSearch className="absolute top-1/2 -translate-y-1/2 left-2.5 w-3 h-3 origin-center" />
    </div>
  )
}

export default SearchBar
