const Button = ({ type, customStyles, text, clickFunction }) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white uppercase hover:bg-secondary rounded-sm ${customStyles}`}
      onClick={() => {
        clickFunction(text)
      }}
    >
      {text}
    </button>
  )
}
export default Button
