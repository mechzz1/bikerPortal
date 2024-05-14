import React, { useState } from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import AppForum from '../../assets/components/appForum/appForum'
import { Dialog } from 'primereact/dialog';
function forums() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <NavBar type="basic" />
            <div className="container-fluid" >
                <div className="row">
                    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar" style={{ height: "100vh" }}>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Analytics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Export</a>
                            </li>
                        </ul>
                    </nav>
                    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 main">
                        <h1>Forum</h1>
                        <button type="submit" className="btn btn-primary" onClick={() => setVisible(true)}>Create New Forum</button>
                        <AppForum />
                        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
                    </main>
                </div>
            </div>

        </>
    )
}

export default forums