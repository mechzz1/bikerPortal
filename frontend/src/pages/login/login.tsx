import React, { useState } from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './login.module.css'
const schema = z.object({
    userName: z.string().min(3, { message: "User Name is required" }),
    password: z.string().min(3, { message: "Password is required" }),
})
type FormData = z.infer<typeof schema>;
function login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const onSubmit = (data: FieldValues) => {

        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const fethUsers = async () => {
            try {
                const res = await axios.request(config);
                const userDataString = JSON.stringify(res.data);
                sessionStorage.setItem('user', userDataString);
                setUser(res.data)
                // toast.success("Success " + `${res.data.message}`)
                navigate('/profile/main');
            } catch (error) {
                // toast.error("Error " + `${error}`)
            }
        }

        fethUsers();
    };

    interface userData {
        id: number,
        name: string
    }
    return (
        <>
            <div className={`${styles.secBg}`}>
                <div className={styles.midCon}>
                    <div className="container p-5">
                        <h4 className='text-center'>
                            Log in
                        </h4>
                        <p className='mb-0 text-center'>
                            Please enter your details
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-12 pt-3">
                                    <label htmlFor="userName">User Name</label>

                                    <input type="text" className="form-control" id="userName" {...register('userName')} />
                                    {errors.userName && <p className='text-danger'>{errors.userName.message} </p>}
                                </div>
                                <div className="col-md-12 pt-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" {...register('password')} />

                                    {errors.password && <p className='text-danger'>{errors.password.message} </p>}
                                </div>
                                <p className='text-end m-0  text-secondary' style={{ cursor: "pointer", fontSize: "12px" }}>
                                    Not register yet? <span className='text-primary'>
                                        Create an account
                                    </span>
                                </p>
                                <div className="col-md-12 d-flex justify-content-center pt-2">
                                    <button type="submit" className="btn btn-primary w-100 p-2">Submit</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default login

