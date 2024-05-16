import React, { useEffect, useState } from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import './forumChat.css'
import AppForum from '../../assets/components/appForum/appForum'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostInfo from '../../models/postInfo';
import dateFormat from 'dateformat';
import AddComment from '../../assets/forms/addComment/addComment';
function forumChat() {
    const id = {
        id: useParams()
    }
    const handleClick = () => {
        getAllPosts();
        getAllChats();

    }
    console.log(id);
    const userData = sessionStorage.getItem('user');
    const [data, setData] = useState<PostInfo[]>([]);
    const [singleData, setSingleData] = useState<any>();
    const [chats, setChats] = useState<any[]>([]);


    let token = null;
    if (userData !== null) {
        let temp = JSON.parse(userData);
        token = temp.token
    }
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:13000/forum/get',
        headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`
        },
        data: id
    };
    const getAllPosts = async () => {

        try {
            const res = await axios.request(config);
            console.log(res.data.data);
            setData([res.data.data]);
            setSingleData(res.data.data)
        } catch (error) {
            toast.error("Error " + `${error}`)
        }
    }

    const getAllChats = async () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/forum/getAllChats',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `${token}`
            },
            data: id
        };
        try {
            const res = await axios.request(config);
            console.log(res.data.data);
            setChats(res.data.data);
            // setSingleData(res.data.data)
        } catch (error) {
            toast.error("Error " + `${error}`)
        }
    }
    useEffect(() => {
        // Fetch data based on the ID
        getAllPosts();
        getAllChats();
    }, []);
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center  comment-top  bg-white border-bottom ">
                            {
                                data?.map((item, index) =>
                                    <div className="card1 bg-light w-100" key={index}>
                                        <div className="username pb-2">Topic: {item.topic}</div>

                                        <div className="card-header1">
                                            <div className="user-info d-flex">
                                                <div className="initial-circle">J</div>
                                                <div className="username align-items-center d-flex pl-2">{item.name}</div>
                                            </div>
                                            <span className="timestamp">{dateFormat(item.createdAt, "mediumDate")}</span>
                                        </div>
                                        <div className="message">
                                            {
                                                item.question
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="coment-bottom bg-white p-2 px-4">
                            <AddComment onClick={handleClick} />
                            {
                                chats.map((chat, index) =>
                                    <div
                                        className="commented-section mt-2" key={index}>
                                        <div className="d-flex flex-row align-items-center commented-user">
                                            <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />
                                            <h5 className="mr-2 align-items-center ">Testing User</h5>
                                        </div>
                                        <div className="comment-text-sm"><span>
                                            {chat.comment}
                                        </span></div>

                                    </div>

                                )
                            }

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