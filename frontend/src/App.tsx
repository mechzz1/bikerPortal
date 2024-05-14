import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import'./bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<PrivateRoutes />}>
            <Route path="dashboard/*" element={<SideBar />}>
              <Route index path="main" element={<Home />} />
              <Route  path="app" element={<AppManagement />} />
              <Route  path="module" element={<ModuleManagement />} />
              <Route  path="organizations" element={<Organizations />} />

            </Route>
          </Route> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
