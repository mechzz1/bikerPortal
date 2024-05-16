import React from 'react'
import { z } from 'zod'
import { useNavigate, useParams } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar } from 'primereact/calendar';
import toast from 'react-hot-toast'
const schema = z.object({
    comment: z.string().min(3, { message: "Comment required" }),
})
type FormData = z.infer<typeof schema>;
interface ChildProps {
    onClick: () => void;
}
function addComment({ onClick }: ChildProps) {
    const id = useParams();
    console.log(id);

    const { register, handleSubmit, formState: { errors } , reset  } = useForm<FormData>({ resolver: zodResolver(schema) });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {

        console.log(id);
        const userData = sessionStorage.getItem('user');
        let token = null;
        if (userData !== null) {
            let temp = JSON.parse(userData);
            token = temp.token
        }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/forum/addComment',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `${token}`
            },
            params: {
                conversationId: id.id
              },
            data: data
        };

        const addPost = async () => {
            try {
                const res = await axios.request(config);
                toast.success("Success " + `${res.data.message}`)
                onClick();
                reset();
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
                <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                    <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />
                    <input type="text" className="form-control mr-3" id="comment" {...register('comment')} placeholder="Add comment" />
                    <button className="btn btn-primary" type="submit">Comment</button>

                </div>
                    {errors.comment && <p className='text-danger'>{errors.comment.message} </p>}
            </form>
        </>
    )
}

export default addComment