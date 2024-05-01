const FormTextArea = ({ name, id, cols, rows, placeholder }) => {
  return (
    <textarea
      className="block w-full p-3 pl-8 mt-4 mb-6 border border-base-300 focus:border-primary focus:outline-none rounded-md resize-none placeholder-italic "
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      required
    />
  )
}
export default FormTextArea
