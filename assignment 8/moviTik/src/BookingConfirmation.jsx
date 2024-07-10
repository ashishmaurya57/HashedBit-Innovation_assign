
import React from 'react';

const BookingConfirmation = ({ bookingId, name, email, mobile }) => {
  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Your booking ID is: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>Thank you for booking!</p>
    </div>
  );
};

export default BookingConfirmation;
