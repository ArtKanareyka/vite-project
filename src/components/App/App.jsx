import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from '../layout/PageWrapper'
import './style.css'
import storageItem from '../../mocks/storage.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageWrapper storage={storageItem} />
    </BrowserRouter>
  </React.StrictMode>
)
