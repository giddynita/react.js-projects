const Button = ({ type, customStyles, text, clickFunction }) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white uppercase hover:bg-secondary ${customStyles}`}
      onClick={clickFunction}
    >
      {text}
    </button>
  )
}
export default Button
