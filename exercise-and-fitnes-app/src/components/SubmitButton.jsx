const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="uppercase bg-primary p-3 mb-3 text-white hover:bg-secondary rounded-md"
    >
      {text}
    </button>
  )
}
export default SubmitButton
