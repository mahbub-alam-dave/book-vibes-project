
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './Components/Routes'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
