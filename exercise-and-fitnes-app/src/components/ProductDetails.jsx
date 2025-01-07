import { Price, Rating } from '../components'
import { FaShoppingCart } from 'react-icons/fa'
import Heading from '../components/Heading'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { addItem } from '../features/cart/cartSlice'

const ProductDetails = ({ singleProduct }) => {
  const {
    image,
    productName,
    productRatings,
    productPrice,
    discountPrice,
    sale,
    productDesc,
    productBrand,
    /*  productColor, */
    category,
    subCategory,
    productId,
  } = singleProduct
  const reviews = useSelector((state) => state.productDetailsState.reviews)
  /* const [selectedColor, setSelectedColor] = useState(productColor[0]) */
  const [selectedAmount, setSelectedAmount] = useState(0)
  const cartProduct = {
    image,
    productName,
    price: sale ? discountPrice : productPrice,
    productId,
    amount: selectedAmount,
    cartID: productId,
  }
  const dispatch = useDispatch()
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  const addToCart = () => {
    if (!selectedAmount) {
      toast.error('Select an amount')
      return
    }
    dispatch(addItem({ product: cartProduct }))
    selectedAmount > 1
      ? toast.success(
          `${selectedAmount}x ${capitalize(productName)} added to your cart`
        )
      : toast.success(`${capitalize(productName)} added to your cart`)
  }
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      <figure>
        <img src={image} alt={productName} className="mx-auto" loading="lazy" />
      </figure>
      <div className="col-span-2">
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
                onChange={(e) => {
                  setSelectedAmount(parseInt(e.target.value))
                }}
              />
            </div>
            {/* <div className="flex items-center gap-x-1.5 ">
              <label htmlFor="color">colors: </label>
               {productColor.map((color) => {
                return (
                  <input
                    key={color}
                    type="button"
                    name="colors"
                    id="colors"
                    value={selectedColor}
                    className={`w-5 h-5 border rounded-full cursor-pointer ${
                      color === selectedColor && 'border-2 border-gray-400'
                    } text-transparent`}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => {
                      setSelectedColor(color)
                    }}
                  />
                )
              })} 
            </div> */}
          </div>
          <button
            type="submit"
            className="col-span-2 uppercase text-white bg-primary hover:bg-secondary flex items-center justify-center gap-x-1.5 text-xs rounded-md w-full h-10 font-semibold"
            onClick={addToCart}
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
                {/* <Link className="hover:text-secondary capitalize">
                  {category},
                </Link> */}
                <Link className="hover:text-secondary capitalize">
                  {subCategory || ''}
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
