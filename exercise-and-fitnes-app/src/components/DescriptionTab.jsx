import { useLoaderData } from 'react-router-dom'
import Heading from './Heading'

const DescriptionTab = ({ singleProduct }) => {
  const { productDesc } = singleProduct
  return (
    <>
      <Heading text="description" margin="mb-4" />
      <p className="text-sm text-accent/80">{productDesc}</p>
    </>
  )
}
export default DescriptionTab
