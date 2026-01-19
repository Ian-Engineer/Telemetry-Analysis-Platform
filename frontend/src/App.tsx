import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './config/router/index'
import {ThemeModeProvider} from './config/theme/index'

function App() {
  return (
    <ThemeModeProvider>
      <RouterProvider router={router} />
    </ThemeModeProvider>
  )
}

export default App
