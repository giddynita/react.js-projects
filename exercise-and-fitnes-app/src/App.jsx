import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Error,
  Home,
  Layout,
  Shop,
  SingleProduct,
  Cart,
  Register,
  Login,
} from './pages'
import { ErrorElement } from './components'
// loaders
import { loader as singleProductLoader } from './pages/SingleProduct'
import { action as reviewAction } from './components/ReviewTab'
import { action as registerAction } from './pages/Register'
import { action as LoginAction } from './pages/Login'
import { store } from './store'
import { auth } from './firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { loginUser } from './features/user/userSlice'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'shop/products/:productId',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
        action: reviewAction(store),
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: LoginAction,
  },
])
const App = () => {
  auth.onAuthStateChanged((user) => {
    const { displayName, email, uid } = user
    store.dispatch(loginUser({ name: displayName, email, userId: uid }))
  })

  return <RouterProvider router={router} />
}
export default App
