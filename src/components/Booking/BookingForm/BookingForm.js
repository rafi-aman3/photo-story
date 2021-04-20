import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import formImg from '../../../img/form.jpg'
import { useForm } from "react-hook-form";
import './BookingForm.css';
import axios from 'axios';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';


const BookingForm = ({ date }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [paymentData, setPaymentData] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    
    const onSubmit = data => {
        setBookingDetails(data);
        console.log(bookingDetails);
    };
    const handlePayment = paymentId => {
        console.log(paymentId)
        setPaymentData(paymentId);
        const bookingData = {
            name: bookingDetails.name,
            date: bookingDetails.date,
            service: bookingDetails.service,
            paymentData,
            created: new Date()
        }

        axios.post('https://obscure-lowlands-44913.herokuapp.com/addBooking', {
            bookingData
        })
        .then(res => {
            if(res) {
                history.push('/dashboard');
            }
        })

        };


    return (

        <main className="booking-calendar-container">
            <img className="booking-bg" src={formImg} alt=""></img>
            <Row className="d-flex align-items-center mt-5 p-5 booking-content">
                <Col style={{display: bookingDetails ? 'none': 'block'}} md="6" className="text-light text-center ">
                    <h1>Boking Form</h1>

                    <div className="d-flex justify-content-center align-items-conter">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input">
                                <div className="inputBox">
                                    <input defaultValue={loggedInUser ? loggedInUser.name : ''} {...register("name", { required: true })} />
                                    {errors.name && <span>This field is required</span>}
                                </div>

                                <div className="inputBox">
                                    <input defaultValue={loggedInUser ? loggedInUser.email : ''} {...register("email", { required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>

                                <div className="inputBox">
                                    <input defaultValue={date.toDateString()} {...register("date", { required: true })} />
                                    {errors.date && <span>This field is required</span>}
                                </div>

                                <div className="inputBox">
                                    <select style={{ color: '#894DC3' }} className="inputBox" {...register("service")}>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Portrait">Portrait</option>
                                        <option value="Fashion">Fashion</option>
                                    </select>
                                </div>

                                <div className="inputBox">
                                    <input style={{ cursor: 'pointer' }} type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col style={{display: bookingDetails ? 'block': 'none'}} md="5">
                    <h1>Paymet</h1>
                    <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                </Col>
            </Row>
        </main>
    );
};

export default BookingForm;