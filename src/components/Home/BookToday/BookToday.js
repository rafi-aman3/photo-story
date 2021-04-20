import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import appoint from '../../../img/appoint.jpg'
import './BookToday.css'

const BookToday = () => {
    const history = useHistory();
    const handleBooking = () => {
        history.push('/booking')
    }
    return (
        <section className="booking-container">
            <Container>
                <Row>
                    <Col md="5" className="d-none d-md-block" >
                        <img src={appoint} alt=""></img>
                    </Col>
                    <Col md="7" className="text-white py-5">
                        <h5 className="text-primary text-uppercase">Book us</h5>
                        <h1 className="my-4">Make A Booking  <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, velit accusantium quod iusto aliquid aut.</p>
                        <Button onClick={handleBooking} style={{ background: '#B87DED' }}>Book Now</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BookToday;