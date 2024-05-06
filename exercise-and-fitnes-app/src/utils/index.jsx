export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}
export const formatDiscountPrice = (price, discount) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100 - discount / 100).toFixed(2))
  return dollarsAmount
}
