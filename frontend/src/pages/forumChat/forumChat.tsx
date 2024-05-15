import React from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import './forumChat.css'
import AppForum from '../../assets/components/appForum/appForum'
function forumChat() {
    return (
        <>
            <NavBar type="basic" />
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center text-left comment-top  bg-white border-bottom ">
                            <AppForum/>
                        </div>
                        <div className="coment-bottom bg-white p-2 px-4">
                            <div className="d-flex flex-row add-comment-section mt-4 mb-4"><img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" /><input type="text" className="form-control mr-3" placeholder="Add comment" /><button className="btn btn-primary" type="button">Comment</button></div>
                            <div
                                className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Corey oates</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">4 hours ago</span></div>
                                <div className="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                            
                            </div>
                            <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default forumChat