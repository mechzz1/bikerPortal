import React from 'react'
import './appForum.css'
function appForum() {
    return (
        <>

            <div className="card1 bg-light">
            <div className="username pb-2">Topic</div>

                <div className="card-header1">
                    <div className="user-info d-flex">
                            <div className="initial-circle">J</div>
                            <div className="username align-items-center d-flex pl-2">John Doe</div>
                    </div>
                    <span className="timestamp">May 14, 2024</span>
                </div>
                <div className="message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis augue eget felis vehicula aliquam. Mauris
                    et magna sagittis, lacinia quam eu, fermentum velit.
                </div>
            </div>
        </>
    )
}

export default appForum