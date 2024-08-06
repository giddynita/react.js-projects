const Heading = ({ text, margin, size }) => {
  return (
    <h3 className={`uppercase ${margin} ${size}  text-accent/80`}>{text}</h3>
  )
}
export default Heading
