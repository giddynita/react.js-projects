const FormInput = ({ type, name, id, placeholder, margin }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`w-full input-sm border border-base-300 focus:border-primary focus:outline-none rounded-md placeholder-italic ${margin}`}
    />
  )
}
export default FormInput
