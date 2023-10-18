import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from '../layout/PageWrapper'
import './style.css'
import storageList from '../../mocks/storage.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageWrapper storage={storageList} />
    </BrowserRouter>
  </React.StrictMode>
)
