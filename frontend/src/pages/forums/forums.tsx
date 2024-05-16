import React, { useEffect, useState } from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import AppForum from '../../assets/components/appForum/appForum'
import { Dialog } from 'primereact/dialog';
import AddForum from '../../assets/forms/addForum/addForum';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostInfo from '../../models/postInfo';
function forums() {
    const [visible, setVisible] = useState(false);
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
        url: 'http://bike.syncstaging.com/forum/getAll',
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
        // fetchRandomImage();

    }, []);
    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar" style={{ height: "100vh" }}>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                            </li>
                        
                        </ul>
                    </nav>
                    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 main">
                        <h1>Forum</h1>
                        <button type="submit" className="btn btn-primary" onClick={() => setVisible(true)}>Create New Forum</button>
                        <AppForum data={data} />
                        <Dialog header="Header" visible={visible}  onHide={() => setVisible(false)}>
                           <AddForum onClick={handleClick}/>
                        </Dialog>
                    </main>
                </div>
            </div>

        </>
    )
}

export default forums