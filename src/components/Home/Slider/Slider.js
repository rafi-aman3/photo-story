import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImage from '../../../img/first.jpg';
import secondImage from '../../../img/second.jpg';
import thirdImage from '../../../img/third.jpg';
import './Slider.css'


const Slider = () => {
    return (
        <Carousel className="mb-5">
            <Carousel.Item className="slider-card">
                <img
                    className="d-block w-100"
                    src={firstImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We Capture Your Moment</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-card">
                <img
                    className="d-block w-100"
                    src={secondImage}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>We Want to bring Light to Your Story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-card">
                <img
                    className="d-block w-100"
                    src={thirdImage}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Want to Freeze Your Moment?</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;