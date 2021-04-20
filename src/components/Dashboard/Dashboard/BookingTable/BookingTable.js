import React from 'react';
import { Button } from 'react-bootstrap';

const BookingTable = ({booking}) => {

     

    return (
        <tr>
            <th>{booking.bookingData.name}</th>
            <th>{booking.bookingData.service}</th>
            <th>{booking.bookingData.date}</th>
            <th>
                <Button onClick={() => {
                    console.log("Confirm Payment", booking._id)
                }}>Confirm</Button>
            </th>
        </tr>
    );
};

export default BookingTable;