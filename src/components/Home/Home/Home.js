import React from 'react';
import About from '../About/About';
import BookToday from '../BookToday/BookToday';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <BookToday></BookToday>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;