import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import booking from '../../../img/f.jpg';
import bg from '../../../img/second.jpg'
import './BookingCalendar.css'
import 'react-calendar/dist/Calendar.css';


const BookingCalendar = ({handleDateChange}) => {

    return (
        <main className="booking-calendar-container">
            <img className="booking-bg" src={bg} alt=""></img>
            <Row className="d-flex align-items-center mt-5 p-5 booking-content">
                <Col  md="4" className="offset-md-1">
                    <h1>Book Us</h1>
                    <Calendar onChange={handleDateChange} value={new Date()}></Calendar>
                </Col>
                <Col md="6">
                    <Image src={booking} fluid></Image>
                </Col>

            </Row>
        </main>
    );
};

export default BookingCalendar;