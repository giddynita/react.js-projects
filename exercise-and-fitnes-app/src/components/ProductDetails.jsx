import { Price, Rating } from '../components'
import { FaShoppingCart } from 'react-icons/fa'
import Heading from '../components/Heading'
import { MdArrowRight } from 'react-icons/md'
import { Link, useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const ProductDetails = ({}) => {
  const { singleProduct } = useLoaderData()
  const {
    productImage,
    productName,
    productRatings,
    productPrice,
    productDesc,
    productBrand,
    productColor,
    category,
    subCategory,
  } = singleProduct
  const reviews = useSelector((state) => state.productDetailsState.reviews)
  const [selectedColor, setSelectedColor] = useState(productColor[0])
  return (
    <div className="grid sm:grid-cols-2 gap-5 sm:flex-row">
      <figure className="bg-gray-100/50 h-max flex ">
        <img src={productImage} alt={productName} className="mx-auto" />
      </figure>
      <div>
        <Heading text={productName} size="text-2xl" margin="mb-1" />
        <div className="flex gap-1">
          <Rating productRatings={productRatings} />
          <p className="text-xs text-primary">
            ({reviews.length} customer review{reviews.length > 1 ? 's' : ''})
          </p>
        </div>
        <Price productPrice={productPrice} size="text-[1.1rem]" margin="my-3" />
        <p className="mb-4 text-accent/80 text-sm">{productDesc}</p>
        <div className=" flex flex-col gap-y-3 gap-x-2 my-5 text-accent/80 capitalize text-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="flex gap-x-1.5   items-center col-span-2">
              <label htmlFor="amount">amount:</label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="w-32 sm:w-24 border rounded-md
           focus:outline-none h-8 px-2 text-accent/60 text-sm"
                min={1}
              />
            </div>
            <div className="flex items-center gap-x-1.5 ">
              <label htmlFor="color">colors: </label>
              {productColor.map((color) => {
                return (
                  <input
                    key={color}
                    type="button"
                    name="colors"
                    id="colors"
                    className={`w-5 h-5 border rounded-full cursor-pointer ${
                      color === selectedColor && 'border-2 border-gray-400'
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => {
                      setSelectedColor(color)
                    }}
                  />
                )
              })}
            </div>
          </div>
          <button
            type="button"
            className="col-span-2 uppercase text-white bg-primary hover:bg-secondary flex items-center justify-center gap-x-1.5 text-xs rounded-md w-full h-10 font-semibold"
          >
            <FaShoppingCart /> add to cart
          </button>
        </div>
        <div>
          <ul className="text-xs flex flex-col gap-y-2 text-accent/80">
            <li className="flex gap-x-1 items-center">
              <span className="flex items-center">
                <MdArrowRight />
                Categories:
              </span>
              <span className="text-primary flex gap-x-1">
                <Link className="hover:text-secondary capitalize">
                  {category},
                </Link>
                <Link className="hover:text-secondary capitalize">
                  {subCategory}
                </Link>
              </span>
            </li>
            <li className="flex gap-x-1 items-center">
              <span className="flex items-center">
                <MdArrowRight />
                Brand:
              </span>
              <span className="text-primary hover:text-secondary cursor-pointer capitalize">
                {productBrand}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails
