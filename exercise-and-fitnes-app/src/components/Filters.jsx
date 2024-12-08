import Select from './Select'

let list = [
  'Default sorting',
  'Sort by name: a - z',
  'Sort by name: z - a',
  'Sort by average rating',
  'Sort by price: low to high',
  'Sort by price: high to low',
]
/* const pageNumber = [6, 9, 12] */

const Filters = () => {
  return (
    <div className="flex flex-col gap-1.5 md:flex-row justify-between">
      <Select name="sorting" list={list} />
      {/* <Select
        name="products-per-page"
        list={pageNumber}
        constant="Products per page"
      /> */}
    </div>
  )
}
export default Filters
