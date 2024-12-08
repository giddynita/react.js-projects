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
  Checkout,
  Contact,
  Category,
  SubCategory,
  Classes,
  ClassType,
  Orders,
} from './pages'
import { ErrorElement, Loading, ProtectedRoute } from './components'

// loaders
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productCategoryLoader } from './pages/Category'
import { loader as shopProductLoader } from './pages/Shop'
import { loader as classesType } from './pages/ClassType'

//actions
import { action as reviewAction } from './components/ReviewTab'
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as calculateCaloriesAction } from './components/CaloriesCalculator'
import { action as checkoutAction } from './components/CheckoutForm'
import { action as classTypeAction } from './pages/ClassType'
import { action as contactAction } from './pages/Contact'
//
import { store } from './store'
import { auth, database } from './firebase/firebase.utils'
import { loginUser } from './features/user/userSlice'
import { doc, getDoc } from 'firebase/firestore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
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
        action: calculateCaloriesAction(store),
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
        loader: shopProductLoader(queryClient),
      },
      {
        path: 'shop/products/:productId',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
        action: reviewAction(store),
      },
      {
        path: 'shop/product-category/:category',
        element: <Category />,
        errorElement: <ErrorElement />,
        loader: productCategoryLoader(queryClient),
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
        errorElement: <ErrorElement />,
        action: checkoutAction(store),
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorElement />,
        action: contactAction,
      },
      {
        path: 'class',
        element: <Classes />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'class/:type',
        element: <ClassType />,
        errorElement: <ErrorElement />,
        loader: classesType,
        action: classTypeAction,
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
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
    action: loginAction,
  },
])
const App = () => {
  const [user, loading, error] = useAuthState(auth)
  useEffect(() => {
    const fetchUser = async (user) => {
      try {
        if (user) {
          const snapshot = await getDoc(doc(database, `users/${user.uid}`))
          const { username, email } = snapshot.data()
          store.dispatch(loginUser({ username, email, uid: user.uid }))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser(user)
  }, [user])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App
