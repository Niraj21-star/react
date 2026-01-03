import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import react from 'react'
import App from './App.jsx'

const createreact=react.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Go to Google'
)




createRoot(document.getElementById('root')).render(
  createreact
)
