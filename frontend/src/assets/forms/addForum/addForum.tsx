import React from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './login.module.css'
const schema = z.object({
    topic: z.string().min(3, { message: "Topicis required" }),
    name: z.string().min(3, { message: "Name required" }),
    question: z.string().min(3, { message: "Question is required" }),
    password: z.string().min(3, { message: "Password is required" }),
})
type FormData = z.infer<typeof schema>;
function addForum() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {

        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:14000/users/login',
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
                // setUser(res.data)
                // toast.success("Success " + `${res.data.message}`)
                navigate('/dashboard/main');
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" className="form-control" id="topic" {...register('topic')} />
                        {errors.topic && <p className='text-danger'>{errors.topic.message} </p>}
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" {...register('name')} />
                        {errors.name && <p className='text-danger'>{errors.name.message} </p>}
                    </div>
                    <div className="col-md-12 pt-3">
                        <label htmlFor="question">Question</label>
                        <input type="text" className="form-control" id="question" {...register('question')} />
                        {errors.question && <p className='text-danger'>{errors.question.message} </p>}
                    </div>
                
                    <div className="col-md-12 d-flex justify-content-end pt-2">
                        <button type="submit" className="btn btn-primary  p-2">Submit</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default addForum