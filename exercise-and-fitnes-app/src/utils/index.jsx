import { toast } from 'react-toastify'

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const formatPageNumber = (totalFilteredProducts, productsPerPage) => {
  const totalProducts = Array.from(
    { length: totalFilteredProducts.length },
    (_, index) => {
      return index
    }
  )
  const pages = Math.ceil(totalProducts.length / productsPerPage)
  const pagesArray = Array.from({ length: pages }, (_, index) => {
    return index + 1
  })
  return pagesArray
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
export const formatTime = (time24) => {
  const [hours24, minutes] = time24.split(':')
  const period = +hours24 >= 12 ? 'PM' : 'AM'
  const hours12 = +hours24 % 12 || 12
  return `${hours12}:${minutes} ${period}`
}

export const formatDateTime = (now) => {
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  return `${day}/${month}/${year}, ${hours}:${minutes}`
}
export const comingSoon = () => {
  toast.success('Coming soon!')
}
