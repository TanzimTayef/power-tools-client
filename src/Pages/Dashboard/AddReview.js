import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
        const { register, handleSubmit } = useForm();
        
        const onSubmit = data => {
            console.log(data);
            const url = `https://young-springs-65716.herokuapp.com/review`;
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
        <section className='container mx-auto py-16 '>
            <div className='bg-slate-50 p-16  shadow'>
            <div className="mb-10">
          <h1 className="text-2xl text-gray-500 border-b-2 text-center pb-4 uppercase font-bold">
            Add a Review
          </h1>
        </div>

            <div className="p-5">
            <form className='grid grid-cols-1 gap-5 ' onSubmit={handleSubmit(onSubmit)}>
            <input className='border p-2 rounded-md' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input className='border p-2 rounded-md' placeholder='Address' {...register("address", { required: true, maxLength: 20 })} />
            <textarea className='border p-2 rounded-md' placeholder='Description' {...register("description")} />
            <input className='border p-2 rounded-md' placeholder='Rating' type="number" {...register("rating")} />
            <input className='border p-2 rounded-md' placeholder='Photo URL' type="text" {...register("picture")} />
            <input type="submit" className='btn w-full' value="Add Review" />
        </form>
            </div>
    </div>
    
    </section>
    );
};

export default AddReview;