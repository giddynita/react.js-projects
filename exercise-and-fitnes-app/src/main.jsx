import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
)
