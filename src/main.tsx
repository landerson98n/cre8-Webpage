import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import GlobalStyle from './styles/createGlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <>
        <Home/>
        <GlobalStyle/>
      </>   
)
