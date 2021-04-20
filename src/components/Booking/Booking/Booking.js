import React from 'react';
import { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import BookingCalendar from '../BookingCalendar/BookingCalendar'
import BookingForm from '../BookingForm/BookingForm';

const Booking = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    }
    
    return (
        <>
            <NavBar></NavBar>
            {
                selectedDate ? <BookingForm date={selectedDate}></BookingForm> : <BookingCalendar handleDateChange={handleDateChange}></BookingCalendar>
            }
            
            <Footer></Footer>
        </>
    );
};

export default Booking;