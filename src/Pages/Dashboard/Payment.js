import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L3997CpAU3eJINqXFGJT7xiHIi6NVaQSEwQOZUZMM2wmPQXa1DPiWs0g5cMpioRnqfkuKNciCC6E5kVcbSd4SPw00bLd92L6W');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;

  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      // headers: {
      //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      // }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="">
       <h1 className="text-2xl">Payment</h1>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-8">
       
        <div class="card-body">
                  <p className="text-primary font-bold">Hello, { orders.personName}</p>
          <h2 class="card-title">Please Pay for  { orders.toolsName}</h2>
          <p>
                      Your Ordered: <span className="text-primary text-xl">{orders.quantity}</span> pieces
          </p>
                  <p>Please pay: ${orders.price }</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
            </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
