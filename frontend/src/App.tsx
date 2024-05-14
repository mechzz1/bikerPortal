import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import'./bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing/landing';
import About from './pages/about/about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
    </>
  )
}

export default App
