import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.utils'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'
import { toast } from 'react-toastify'

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (!user) {
    toast.error('Login before you proceed')
    return <Navigate to="/login" />
  }
  return children
}
export default ProtectedRoute
