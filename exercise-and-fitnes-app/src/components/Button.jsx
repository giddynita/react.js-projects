import { MdDelete, MdDeleteForever } from 'react-icons/md'

const Button = ({ type, customStyles, text, clickFunction }) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white uppercase hover:bg-secondary ${customStyles}`}
      onClick={clickFunction}
    >
      <span>
        {text == 'clear cart' && <MdDeleteForever className="text-[1rem]" />}
      </span>{' '}
      <span>{text}</span>
    </button>
  )
}
export default Button
