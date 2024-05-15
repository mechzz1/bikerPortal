import React from 'react'
import NavBar from '../../assets/components/navBar/navBar'

import styles from './dashboard.module.css'
import { Outlet } from 'react-router-dom'
function dashboard() {
    return (
        <>
            <NavBar type='basic'/>
            <Outlet />

      
        </>
    )
}

export default dashboard