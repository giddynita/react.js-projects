import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Error, Home, Layout, Shop } from './pages'
import { ErrorElement } from './components'

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
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
