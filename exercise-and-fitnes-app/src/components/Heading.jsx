const Heading = ({ text, margin, size }) => {
  return (
    <h3 className={`uppercase ${margin} ${size} font-semibold text-accent/80`}>
      {text}
    </h3>
  )
}
export default Heading
