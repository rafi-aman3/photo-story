import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Iel3nCzU55x5gII40XqAium1aaqPGeYPqUQ7NaKzBStINGzUOyw92GJKWFLZFoFoEwk6HVMVqBvpNJQAOa4mEed00IyNb9rfY');

const ProcessPayment = ({handlePayment}) => {
    
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
            
        </Elements>
    );
};

export default ProcessPayment;