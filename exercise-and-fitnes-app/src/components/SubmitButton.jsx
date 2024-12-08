const SubmitButton = ({ text, texting, navigation, height }) => {
  return (
    <>
      {navigation && navigation.state === 'submitting' ? (
        <div
          className={`bg-secondary  text-white hover:bg-secondary rounded flex items-center gap-x-2 justify-center text-sm w-full h-[2.5rem] ${height}`}
        >
          <button type="submit" className="uppercase">
            {texting}
          </button>
          <span className="loading loading-spinner loading-xs"></span>
        </div>
      ) : (
        <button
          type="submit"
          className={`uppercase bg-primary text-white hover:bg-secondary rounded text-sm w-full h-[2.5rem] ${height}`}
        >
          {text}
        </button>
      )}
    </>
  )
}
export default SubmitButton
