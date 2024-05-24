import React from 'react'
import ReactDOM from 'react-dom/client'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet
              defaultTitle='Vite React Tailwind Starter'
              titleTemplate='%s | Vite React Tailwind Starter'
          >
              <meta charSet='utf-8'/>
              <html lang='id'/>
          </Helmet>
      </HelmetProvider>
    <App />
  </React.StrictMode>,
)
