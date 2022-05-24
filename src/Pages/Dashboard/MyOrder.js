import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
        }
    }

    return (
        <div>
            Total Ordered: {orders.length}
            { 
                orders.map(order => <div className='border m-5 w-80 p-5'>
                      <button onClick={() => handleDelete(order._id)} className='text-red-500 text-xl btn'>x</button>
                    <p>{order.toolsName}</p>
                    <p>{order.toolsId}</p>
                  
                </div>)
            }
        </div>
    );
};

export default MyOrder;