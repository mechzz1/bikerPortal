import React from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './login.module.css'
import toast from 'react-hot-toast'
const schema = z.object({
  title: z.string().min(3, { message: "Title required" }),
  decription: z.string().min(3, { message: "Description required" }),

})
type FormData = z.infer<typeof schema>;
interface ChildProps {
  onClick: () => void; 
}
function addPost({onClick}:ChildProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {

    console.log(data);
    const userData = sessionStorage.getItem('user');
    let token = null;
    if (userData !== null) {
      let temp = JSON.parse(userData);
      token = temp.token
    }
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:13000/posts/add',
      headers: {
        'Content-Type': 'application/json',
        'access-token': `${token}`
      },
      data: data
    };

    const addPost = async () => {
      try {
        const res = await axios.request(config);
        toast.success("Success " + `${res.data.message}`)
        onClick();
      } catch (error) {
        toast.error("Error " + `${error}`)
      }
    }
    addPost();
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
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" {...register('title')} />
            {errors.title && <p className='text-danger'>{errors.title.message} </p>}
          </div>
          <div className="col-md-8 pt-3">
            <label htmlFor="decription">Description</label>
            <textarea className="form-control" id="decription" {...register('decription')} />
            {errors.decription && <p className='text-danger'>{errors.decription.message} </p>}
          </div>
          <div className="col-md-8 d-flex justify-content-start pt-2">
            <button type="submit" className="btn btn-primary  p-2 pl-5 pr-5">Post</button>
          </div>

        </div>
      </form>
    </>
  )
}

export default addPost