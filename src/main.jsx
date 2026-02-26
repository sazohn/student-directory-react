import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Badge from './components/Badge.jsx'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import StudentCard from './components/StudentCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Badge />
    <Button />
    <Input />
    <StudentCard />
  </StrictMode>,
)
