const Select = ({ name, list }) => {
  return (
    <div className="form-control">
      <select
        name={name}
        id={name}
        className="select border-accent/20 text-accent/60 bg-base-100 select-sm w-48 focus:border-none"
        onChange={(e) => {
          console.log(e.target.value)
        }}
      >
        {list?.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}
export default Select
