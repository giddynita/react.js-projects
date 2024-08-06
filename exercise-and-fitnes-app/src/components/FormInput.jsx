const FormInput = ({ type, name, id, placeholder, margin, label }) => {
  return (
    <div className="form-control">
      <label className={`label ${label}`}>
        <span className="label-text capitalize">{placeholder}</span>
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full input-sm border border-base-300 focus:border-primary focus:outline-none rounded placeholder-italic ${margin}`}
        required
      />
    </div>
  )
}
export default FormInput
