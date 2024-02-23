import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/createGlobalStyle'
import Routes from './routes'
import WebFont from 'webfontloader';
import appLoading from 'app-loading'
import {
  createBrowserRouter,
  RouterProvider,
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
  appLoading.setColor('black')
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    appLoading.start()  
  )
  
  WebFont.load({
        google: {
          families: ['Baloo 2:bold', 'Be Vietnam Pro: bold'], 

        },
        active(){
          appLoading.stop()
          
        }
  });

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </>   
  )
  


