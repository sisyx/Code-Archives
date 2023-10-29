import React from 'react'
import ReactDOM from 'react-dom/client'
import Wallpainter from './Wallpainter.jsx'
import './styles/output.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>,
)
