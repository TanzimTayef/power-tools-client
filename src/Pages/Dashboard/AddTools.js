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
        <div>
            This is Add Tools page:
       <form className='grid grid-cols-1 gap-5 w-96' onSubmit={handleSubmit(onSubmit)}>
            <input className='border' placeholder='Tools Name' {...register("toolsName", { required: true, maxLength: 20 })} />
            <textarea className='border' placeholder='Description' {...register("desc")} />
            <input className='border' placeholder='Price' type="number" {...register("price")} />
            <input className='border' placeholder='Minimum Order' type="number" {...register("minOrder")} />
            <input className='border' placeholder='Available Tools' type="number" {...register("availableQuan")} />
            <input className='border' placeholder='Tools Images' {...register("images")} />     
            <input type="submit" className='btn w-full' value="Add A Tools" />
        </form>
            
          
        </div>
    );
};

export default AddTools;