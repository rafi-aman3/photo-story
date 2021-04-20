import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import wedding from '../../../img/card1.jpg';
import potrait from '../../../img/card2.jpg';
import fashion from '../../../img/card3.jpg';
import './Services.css'
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
    {
        id: 1,
        name: 'Wedding Photogrpahy',
        img: wedding
    },
    {
        id: 2,
        name: 'Potrait Photogrpahy',
        img: potrait
    },
    {
        id: 3,
        name: 'Fashion Photogrpahy',
        img: fashion

    }
]

const Services = () => {
    
    return (
        <section className="service-container mt-5 mb-5 pt-5" id="services">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <h5>WHAT WE DO</h5>
                        <h2>Our Services</h2>
                        
                    </Col>
                    
                </Row>
                <Row  className="d-flex justify-content-center align-items-center">
                    {
                        serviceData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </Row>
            </Container>
            
        </section>
    );
};

export default Services;