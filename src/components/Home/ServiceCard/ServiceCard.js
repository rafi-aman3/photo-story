import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const history = useHistory();
    const handleBooking = () => {
        history.push('/booking')
    }
    return (
        <Col md="3" className="d-flex service-card-wrapper">
            <div className="service-card d-flex">
                <img src={service.img} alt=""></img>
                <div className="card-info">
                    <h3>{service.name}</h3>
                    <Button onClick={handleBooking}>Book Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default ServiceCard;