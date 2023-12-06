import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routing'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
