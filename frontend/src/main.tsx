import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
