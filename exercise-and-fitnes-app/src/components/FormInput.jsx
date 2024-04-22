const FormInput = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full py-3 pl-8 pr-3 border border-base-300 focus:border-primary focus:outline-none rounded-md placeholder-italic "
      required
    />
  )
}
export default FormInput
