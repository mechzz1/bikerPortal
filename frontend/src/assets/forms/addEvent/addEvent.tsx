import React from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar } from 'primereact/calendar';
const schema = z.object({
    name: z.string().min(3, { message: "Name required" }),
    description: z.string().min(3, { message: "Description required" }),
    date: z.date({ message: "Description required" }),


})
type FormData = z.infer<typeof schema>;
function addEvent() {
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
                <div className="row justify-content-center">
                    <div className="col-md-8 pt-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" {...register('name')} />
                        {errors.name && <p className='text-danger'>{errors.name.message} </p>}
                    </div>
                    <div className="col-md-8 pt-3">
                        <label htmlFor="date">Date</label>

                        <Calendar
                            id="date"
                            className="w-100"
                            {...register('date')}
                        />
                        {errors.date && <p className='text-danger'>{errors.date.message} </p>}

                    </div>
                    <div className="col-md-8 pt-3">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" {...register('description')} />
                        {errors.description && <p className='text-danger'>{errors.description.message} </p>}
                    </div>
                
                    <div className="col-md-8 d-flex justify-content-start pt-2">
                        <button type="submit" className="btn btn-primary  p-2 pl-5 pr-5">Post</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default addEvent