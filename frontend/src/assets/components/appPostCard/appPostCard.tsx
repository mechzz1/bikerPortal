import React, { useEffect, useState } from 'react'
import AppProfileCard from '../appProfileCard/appProfileCard'
import { Dialog } from 'primereact/dialog';
import AddPost from '../../forms/addPost/addPost';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostInfo from '../../../models/postInfo';
import dateFormat, { masks } from "dateformat";
import IMAGES from '../../images/images';
import { environment } from '../../../environments/environment';
function appPostCard() {
    const [visible, setVisible] = useState(false);
    const baseUrl = environment.url;
    const [data, setData] = useState<PostInfo[]>([]);
    const handleClick = () => {
        setVisible(false)
        getAllPosts();
      };
   
    const userData = sessionStorage.getItem('user');
    let token = null;
    if (userData !== null) {
        let temp = JSON.parse(userData);
        token = temp.token
    }
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseUrl}/posts/getAll`,
        headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`
        },
    };
    const getAllPosts = async () => {
        try {
            const res = await axios.request(config);
            console.log(res.data.data);
            setData(res.data.data);
        } catch (error) {
            toast.error("Error " + `${error}`)
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <>
            <div>
                <button type="button" className="btn btn-light w-100 mb-2" onClick={() => setVisible(true)} >Add Post</button>
            </div>
            <div className="feed " style={{overflow: "auto", height:"100%"}}>
            
                {
                    data.map((item, index) => 
                        <div className="bg-white border mt-1"  key={index}>
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                    <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src={IMAGES.user} width="45" />
                                        <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">{item.User.name}</span><span className="text-black-50 time">{dateFormat(item.createdAt , 'mediumDate')}</span></div>
                                    </div>
                                    <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                </div>
                            </div>
                            <div className="px-3 font-weight-bold"><span>
                                {item.title}
                                </span></div>
                            <div className="p-2 px-3"><span>
                                {item.decription}
                                </span></div>
                            <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                        </div>
                    )
                }

            </div>
            <Dialog header="Add Post" visible={visible} onHide={() => setVisible(false)}>
                <AddPost onClick={handleClick} />
            </Dialog>
        </>
    )
}

export default appPostCard