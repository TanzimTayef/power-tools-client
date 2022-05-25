import React from 'react';
import { useForm } from 'react-hook-form';

const AddTools = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/tools`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            console.log("added a new tool successful", data)
        }) 
       
    };
    return (
        <section className='container mx-auto py-16'>
            <div className='bg-slate-50 p-16  shadow'>
            <div className="mb-10">
          <h1 className="text-2xl text-gray-500 border-b-2 text-center pb-4 uppercase font-bold">
            Add a Prodcut
          </h1>
        </div>
            <form className='grid grid-cols-1 gap-5' onSubmit={handleSubmit(onSubmit)}>
            <input className='border p-2 rounded-md' placeholder='Tools Name' {...register("toolsName", { required: true, maxLength: 20 })} />
            <textarea className='border p-2 rounded-md' placeholder='Description' {...register("desc")} />
            <input className='border p-2 rounded-md' placeholder='Price' type="number" {...register("price")} />
            <input className='border p-2 rounded-md' placeholder='Minimum Order' type="number" {...register("minOrder")} />
            <input className='border p-2 rounded-md' placeholder='Available Tools' type="number" {...register("availableQuan")} />
            <input className='border p-2 rounded-md' placeholder='Tools Images' {...register("images")} />     
            <input type="submit" className='btn w-full' value="Add A Tools" />
             </form>
            </div>
          
     
            
          
        </section>
    );
};

export default AddTools;