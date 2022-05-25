import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({orders}) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { price } = orders;
    console.log(price)

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        // confirm your payment: 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: orders.personName,
                        email: orders.email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
        }


    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
                 {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;