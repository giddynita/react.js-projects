import { Form, Link, useLoaderData } from 'react-router-dom'
import FormTextArea from './FormTextArea'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'

const ReviewForm = () => {
  const { singleProduct } = useLoaderData()
  const { productId } = singleProduct
  return (
    <div className="text-sm text-accent/80 py-6">
      <p>Add a review</p>
      <p className="mb-4">
        Your email address will not be published. Required fields are marked *
      </p>
      <Form method="POST">
        <div className="grid grid-cols-6 items-start">
          <label htmlFor="rating" className="col-span-1">
            Your rating *
          </label>
          <div className="rating rating-xs col-span-5">
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="rating-hidden hidden"
            />
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              id="rating"
              className="mask mask-star-2 bg-yellow-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 items-start mb-4">
          <label htmlFor="review" className="col-span-1 mt-1">
            Your review *
          </label>
          <div className="col-span-5">
            <FormTextArea name="review" id="review" rows={6} />
          </div>
        </div>
        <div className="grid grid-cols-6 items-start mb-4">
          <label htmlFor="name" className="col-span-1 mt-1">
            Name *
          </label>
          <div className="col-span-5">
            <FormInput name="name" type="text" id="name" />
          </div>
        </div>
        <div className="grid grid-cols-6 items-start mb-6">
          <label htmlFor="email" className="col-span-1 mt-1.5">
            Email *
          </label>
          <div className="col-span-5">
            <FormInput name="email" type="email" id="email" />
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-start-2">
            <Link to={`/shop/products/${productId}`}>
              <SubmitButton text="submit" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  )
}
export default ReviewForm
