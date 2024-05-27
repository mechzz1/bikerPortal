import React, { useEffect, useState } from 'react'
import './appProfileCard.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import ProfileInfo from '../../../models/profileInfo';
import dateFormat from 'dateformat';
import { environment } from '../../../environments/environment';
function appProfilecard2() {
    const [data, setData] = useState<ProfileInfo | null>(null);
    const baseUrl = environment.url;
    const userData = sessionStorage.getItem('user');
    let token = null;
    if (userData !== null) {
        let temp = JSON.parse(userData);
        token = temp.token
    }
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseUrl}/users/getUser`,
        headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`
        },
    };
    const getUserInfo = async () => {
        try {
            const res = await axios.request(config);
            console.log(res.data.data);
            setData(res.data.data);
        } catch (error) {
            toast.error("Error " + `${error}`)
        }
    }
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <>
            <div className=" mb-4 d-flex justify-content-center">
                <div className="card2">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        <button className="btnn btnn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100"
                            width="100" />
                        </button> <span className="name mt-3"></span>{data?data.name:""}<span className="idd">@ {data?data.userName:""}</span>
                        {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span
                            className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                        <div className="text">

                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i
                                className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span>
                                <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span>
                            </div>
                            <div className=" px-2 rounded mt-4 date "> <span className="join">Joined {data?dateFormat(data.createdAt,"mediumDate"):""}</span> </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default appProfilecard2