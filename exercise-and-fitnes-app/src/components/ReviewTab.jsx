import { useLoaderData } from 'react-router-dom'
import Heading from './Heading'
import Rating from './Rating'
import reviewImage from '../assets/images/review-img.png'
import { toast } from 'react-toastify'
import { handleReviews } from '../features/product_details/productDetailsSlice'
import ReviewForm from './ReviewForm'
import { useSelector } from 'react-redux'
import day from 'dayjs'
import { BsDash } from 'react-icons/bs'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const review = Object.fromEntries(formData)

    try {
      store.dispatch(handleReviews({ review }))
      toast.success('Review submitted successfully')
    } catch (error) {
      console.log(error)
    }

    return null
  }
const ReviewTab = () => {
  const reviews = useSelector((state) => state.productDetailsState.reviews)
  const { singleProduct } = useLoaderData()
  const { productName } = singleProduct
  const createdAt = new Date()
  const date = day(createdAt).format('MMM D, YYYY')

  if (!reviews) {
    return (
      <>
        <Heading text={`No review for ${productName}`} margin="mb-3" />
        <ReviewForm />
      </>
    )
  }

  return (
    <>
      <Heading
        text={`${reviews.length} review${
          reviews.length > 1 ? 's' : ''
        } for ${productName}`}
        margin="mb-3"
      />
      {reviews.map(({ name, review }, index) => {
        return (
          <div
            key={index}
            className="flex flex-start gap-3 border-y-[1px] py-3 border-accent/10"
          >
            <figure>
              <img
                src={reviewImage}
                alt="name"
                className="w-10 h-10 rounded-full"
              />
            </figure>
            <div className="flex-1">
              <div className="text-primary flex justify-between mb-1 text-sm">
                <p className="flex items-center gap-0.5">
                  {name}
                  <span className="text-accent/80">
                    <BsDash />
                  </span>
                  <span className="text-accent/50">{date}</span>
                </p>
                <Rating productRatings={3} />
              </div>
              <p className="text-accent/80">{review}</p>
            </div>
          </div>
        )
      })}
      <ReviewForm />
    </>
  )
}
export default ReviewTab
