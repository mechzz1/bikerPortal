import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function privateRoutes() {
    const data = sessionStorage.getItem('user');

    return (
        <>
            {data ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default privateRoutes