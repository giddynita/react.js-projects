import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <h4 className="text-center font-bold text-4xl">There was an error...</h4>
  )
}
export default ErrorElement
