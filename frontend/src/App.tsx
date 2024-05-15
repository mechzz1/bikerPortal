import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Forums from './pages/forums/forums';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import ForumChat from './pages/forumChat/forumChat';
import Signup from './pages/signup/signup';
import SideBar from './assets/components/sildeBar/sideBar';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forum" element={<Forums />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/forumchat" element={<ForumChat />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sideBar" element={<SideBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Dashboard />} />


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
