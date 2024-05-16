import React, { useEffect, useState } from 'react'
import IMAGES from '../../images/images'
import { Dialog } from 'primereact/dialog';
import AddEvent from '../../forms/addEvent/addEvent';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostInfo from '../../../models/postInfo';
interface ImageData {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
    };
    user: {
        username: string;
        links: {
            html: string;
        };
    };
}
function appEventsBar() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<PostInfo[]>([]);
    const [images, setImages] = useState<ImageData[]>([]);


    const handleClick = () => {
        setVisible(false)
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
        url: 'http://localhost:13000/events/getAll',
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
    const fetchRandomImage = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random?query=motorbike&count=2&client_id=NxmUpGF6RlPuxf4KdKFQdLQ8yOlbvsq5dYo-sMSPUHk&w=200&h=200&fit=crop');
            setImages(response.data);
            console.log(response.data, " asdsd");
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    };

    useEffect(() => {
        getAllPosts();
        // fetchRandomImage();

    }, []);
    return (
        <>
            <div className='d-flex justify-content-between pt-2'>
                <h5 className='align-items-center'>
                    Upcomming Events
                </h5>
                <button type="button" className="btn btn-light" onClick={() => setVisible(true)}>Add</button>
            </div>
            <p className='mb-0'>
                view All
            </p>
            <div className="feed p-2 pb-5" style={{ overflow: "auto", height: "100%" }}>
                {
                    data.slice(0, 3).map((item, index) =>
                        <div className="card p-2 mt-2" style={{ width: "18rem;" }} key={index}>
                            <img src={images.length > 0 && images[index]?.urls?.regular ? images[index].urls.regular : ''} className="card-img-top" alt="..." width={80} height={50} />
                            <hr />
                            <div className="card-body">
                                <h5>
                                    {item.name}
                                </h5>
                                <p className="card-text m-0">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            <Dialog header="Add Post" visible={visible} onHide={() => setVisible(false)}>
                <AddEvent onClick={handleClick} />
            </Dialog>
        </>
    )
}

export default appEventsBar