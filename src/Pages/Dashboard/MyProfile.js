import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const [user] = useAuthState(auth);
  
        const { register, handleSubmit } = useForm();
        
        const onSubmit = data => {
            const email = user.email;
            const userInfo = {
                name: user.displayName,
                email: user.email,
                education: data.education,
                location: data.location,
                phone: data.phone,
                profile: data.profile
            } 
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                console.log("put success", data)
            }) 
           
        };
    return (
        <section>
            <div className='border p-5 rounded-full w-64'>
                <h1>{user?.displayName}</h1>
                <h4>{user?.email}</h4>
            </div>
            <form className='grid grid-cols-1 gap-5 w-96' onSubmit={handleSubmit(onSubmit)}>
            <input className='border' placeholder='Your education' {...register("education", { required: true, maxLength: 20 })} />
            <input className='border' placeholder='City/District' {...register("location", { required: true, maxLength: 20 })} />
            <input className='border' placeholder='Phone' {...register("phone", { required: true, maxLength: 20 })} />
            <input className='border' placeholder='profile' {...register("profile", { required: true, maxLength: 20 })} />     
            <input type="submit" className='btn w-full' value="Add Your Information" />
        </form>
       </section>
    );
};

export default MyProfile;