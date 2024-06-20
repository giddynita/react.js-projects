const SubmitButton = ({ text, texting, navigation }) => {
  return (
    <>
      {navigation.state === 'submitting' ? (
        <div className="bg-secondary p-2 text-white hover:bg-secondary rounded flex items-center gap-x-2 justify-center text-sm w-full">
          <button type="submit" className="uppercase">
            {texting}
          </button>
          <span className="loading loading-spinner loading-xs"></span>
        </div>
      ) : (
        <button
          type="submit"
          className="uppercase bg-primary p-2 text-white hover:bg-secondary rounded text-sm w-full"
        >
          {text}
        </button>
      )}
    </>
  )
}
export default SubmitButton
