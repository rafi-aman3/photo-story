import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="mt-5 mb-5 card shadow-sm">
            <div className="card-body">
                <p className="card-text text-dark text-center">{testimonial.quote}</p>
            </div>
            <div className="d-flex align-items-center justify-content-around">
                
                    <h5 className="text-primary text-center">{testimonial.name}</h5>
                    <h6 className="text-dark m-0">{testimonial.from}</h6>
                
            </div>
       </div>
    );
};

export default TestimonialCard;