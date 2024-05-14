import React, { useState } from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import AppForum from '../../assets/components/appForum/appForum'
import { Dialog } from 'primereact/dialog';
import AddForum from '../../assets/forms/addForum/addForum';
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
                        <Dialog header="Header" visible={visible}  onHide={() => setVisible(false)}>
                           <AddForum/>
                        </Dialog>
                    </main>
                </div>
            </div>

        </>
    )
}

export default forums