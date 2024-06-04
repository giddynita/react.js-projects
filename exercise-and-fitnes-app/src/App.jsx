import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Error, Home, Layout, Shop, SingleProduct, Cart } from './pages'
import { ErrorElement } from './components'
// loaders
import { loader as singleProductLoader } from './pages/SingleProduct'
import { action as reviewAction } from './components/ReviewTab'
import { store } from './store'
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
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
