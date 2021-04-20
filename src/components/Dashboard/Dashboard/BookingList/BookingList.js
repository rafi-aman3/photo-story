import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import BookingTable from '../BookingTable/BookingTable';
import './BookingList.css'
const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        axios('https://obscure-lowlands-44913.herokuapp.com/bookings?name=' + loggedInUser.name )
            .then(res => setBookings(res.data))
    }, [loggedInUser.name])

    return (
        <Container class="table-container">
            <h5>Your Bookings</h5>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Service</th>     
                        <th>Date</th>     
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingTable key={booking._id} booking={booking}></BookingTable>)
                    }
                    
                </tbody>
            </table>
        </Container>
    );
};

export default BookingList;