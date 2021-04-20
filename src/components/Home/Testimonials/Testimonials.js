import React from 'react';
import { Container } from 'react-bootstrap';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'

const testimonialData = [
    {
        id: 1,
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
    },
    {
        id: 2,
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
    },
    {
        id: 3,
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
    }
]

const Testimonials = () => {
    return (
        <section className="mt-5 pt-5 testimonial " id="reviews">
            <Container >
                <h2 className="text-uppercase text-center text-light">See What Our Client <br/> Says</h2>
                <div className="card-deck mt-5  text-light">
                    {
                        testimonialData.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
                    }
                    

                </div>
            </Container>

        </section>
    );
};

export default Testimonials;