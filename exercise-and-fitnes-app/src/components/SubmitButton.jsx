const SubmitButton = ({ text, texting, navigation, btnFunc }) => {
  return (
    <>
      {navigation.state === 'submitting' ? (
        <div className="bg-secondary p-3 text-white hover:bg-secondary rounded-md flex items-center gap-x-2 text-sm">
          <button type="submit" className="uppercase">
            {texting}
          </button>
          <span className="loading loading-spinner loading-xs"></span>
        </div>
      ) : (
        <button
          type="submit"
          className="uppercase bg-primary p-3 text-white hover:bg-secondary rounded-md text-sm"
          onClick={btnFunc}
        >
          {text}
        </button>
      )}
    </>
  )
}
export default SubmitButton
