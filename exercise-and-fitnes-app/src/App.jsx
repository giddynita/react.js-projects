import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from 'react-router-dom'
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
} from './pages'
import { ErrorElement } from './components'
// loaders
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productCategoryLoader } from './pages/Category'
import { loader as productSubCategoryLoader } from './pages/SubCategory'
import { action as reviewAction } from './components/ReviewTab'
import { action as registerAction } from './pages/Register'
import { action as LoginAction } from './pages/Login'
import { store } from './store'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { loginUser } from './features/user/userSlice'
import { getDoc } from 'firebase/firestore'
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
        path: 'shop/product-category/:category',
        element: <Category />,
        errorElement: <ErrorElement />,
        loader: productCategoryLoader,
      },
      {
        path: 'shop/product-category/:category/:subcategory',
        element: <SubCategory />,
        errorElement: <ErrorElement />,
        loader: productSubCategoryLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'contact',
        element: <Contact />,
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
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userDocRef = await createUserProfileDocument(userAuth)
      const snapshot = await getDoc(userDocRef)
      const { displayName, email } = snapshot.data()
      store.dispatch(
        loginUser({ name: displayName, email, userId: snapshot.id })
      )
    }
  })

  return <RouterProvider router={router} />
}
export default App
