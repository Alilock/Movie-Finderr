import React from 'react'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import store from './store/store'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
      <Toaster />
    </Provider>
  )
}

export default App
