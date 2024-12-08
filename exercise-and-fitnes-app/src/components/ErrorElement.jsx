import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="min-h-screen">
      <h4 className="text-center font-bold text-4xl">There was an error...</h4>
    </div>
  )
}
export default ErrorElement
