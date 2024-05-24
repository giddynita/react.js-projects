const SubmitButton = ({ text, texting, navigation }) => {
  return (
    <>
      {navigation.state === 'submitting' ? (
        <div className="bg-secondary p-3 text-white hover:bg-secondary rounded-md flex items-center gap-x-2">
          <button type="submit" className="uppercase">
            {texting}
          </button>
          <span className="loading loading-spinner loading-xs"></span>
        </div>
      ) : (
        <button
          type="submit"
          className="uppercase bg-primary p-3 text-white hover:bg-secondary rounded-md"
        >
          {text}
        </button>
      )}
    </>
  )
}
export default SubmitButton
