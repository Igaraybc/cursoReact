import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  //renderizando o elemento App na DOM e colocando no elemento que tem id=root do html 
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
