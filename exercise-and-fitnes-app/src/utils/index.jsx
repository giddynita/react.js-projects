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
