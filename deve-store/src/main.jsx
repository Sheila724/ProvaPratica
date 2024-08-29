import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'


// importando paginas 
import Home from './routes/Home'
import NewPost from './routes/NewPost'
import DeleteSucess from './routes/DeleteSucess'
import Uptade from './routes/Uptade'

// configurando rotas
const router = createBrowserRouter([
  {
    element: <App/>,
    children:[{
      path: "/",
      element: <Home />
    },{
      path: "/New",
      element: <NewPost />
    },{
      path: "/delete/:id",
      element: <DeleteSucess />
    },{
      path: "/update/:id",
      element: <Uptade />
    }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)