import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/createGlobalStyle'
import Routes from './routes'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Equipe } from './components/Pages/Equipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Equipe",
    element: <Equipe/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
        <GlobalStyle/>
      </>   
)
