import React from 'react'
import ReactDOM from 'react-dom/client'
import { About } from './components/Pages/About'
import { Home } from './components/Pages/Home'
import GlobalStyle from './styles/createGlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <>
        <Home/>
        <GlobalStyle/>
      </>   
)
