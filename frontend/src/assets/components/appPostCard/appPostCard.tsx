import React, { useState } from 'react'
import AppProfileCard from '../appProfileCard/appProfileCard'
import { Dialog } from 'primereact/dialog';
import AddPost from '../../forms/addPost/addPost';

function appPostCard() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div>
                <button type="button" className="btn btn-light w-100 mb-2" onClick={() => setVisible(true)} >Add Post</button>
            </div>
            <div className="feed ">
                {/* <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                                <div className="feed-text px-2">
                                    <h6 className="text-black-50 mt-2">What's on your mind</h6>
                                </div>
                                <div className="feed-icon px-2"><i className="fa fa-long-arrow-up text-black-50"></i></div>
                            </div> */}
                <div className="bg-white border ">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45" />
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div className="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                </div>
                <div className="bg-white border mt-2">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45" />
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div className="feed-image p-2 px-3"><img className="img-fluid img-responsive" src="https://i.imgur.com/aoKusnD.jpg" /></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                </div>
            </div>
            <Dialog header="Header" visible={visible} onHide={() => setVisible(false)}>
                <AddPost />
            </Dialog>
        </>
    )
}

export default appPostCard