import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import couple from '../../../img/couple.jpg'
import './About.css'

const About = () => {
    const history = useHistory();
    const handleBooking = () => {
        history.push('/booking')
    }
    return (
        <Container className="mt-5 pt-5 mb-5" id="about">
            <Row style={{ height: '600px' }} className="d-flex align-items-center about-container">
                <Col md="4" className="offset-md-1">
                    <h1 style={{ color: '#B87DED' }}>We want to capture <br /> Your story</h1>
                    <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nihil fugit nesciunt error!</p>
                    <Button onClick={handleBooking} style={{ background: '#B87DED' }}>BOOK NOW</Button>
                </Col>
                <Col md="4" className="offset-md-1">
                    <div>
                        <Image style={{ width: '80%' }} src={couple}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;