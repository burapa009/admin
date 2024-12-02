import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import connectDB from './utils/db.js'


// เชื่อมต่อ MongoDB พร้อม error handling
connectDB().catch(error => {
  console.error('Failed to connect to MongoDB:', error);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)