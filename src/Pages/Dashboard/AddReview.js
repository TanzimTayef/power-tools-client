import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
        const { register, handleSubmit } = useForm();
        
        const onSubmit = data => {
            console.log(data);
            const url = `http://localhost:5000/review`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(result =>{
                console.log(result);
            } )
        };
    return (
        <div className='w-50 mx-auto'>
        <h2>Please add a Review</h2>
        <form className='grid grid-cols-1 gap-5 w-96' onSubmit={handleSubmit(onSubmit)}>
            <input className='border' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input className='border' placeholder='Address' {...register("address", { required: true, maxLength: 20 })} />
            <textarea className='border' placeholder='Description' {...register("description")} />
            <input className='border' placeholder='Rating' type="number" {...register("rating")} />
            <input className='border' placeholder='Photo URL' type="text" {...register("picture")} />
            <input type="submit" className='btn w-full' value="Add Review" />
        </form>
    </div>
    );
};

export default AddReview;