import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const {data: order, isLoading} = useQuery(["order",id], () => fetch(url).then(res => res.json()))
    
    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <h1>Play pay for: {id}</h1>
        </div>
    );
};

export default Payment;