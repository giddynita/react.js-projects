const Heading = ({ text, margin }) => {
  return (
    <h3 className={`uppercase ${margin} font-semibold text-accent/80`}>
      {text}
    </h3>
  )
}
export default Heading
