const FormTextArea = ({ name, id, cols, rows, placeholder, margin }) => {
  return (
    <textarea
      className={`block w-full px-2.5 border border-base-300 focus:border-primary focus:outline-none rounded-md resize-none placeholder-italic ${margin}`}
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
