import React, { useState } from 'react';
import BookingConfirmation from './BookingConfirmation';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [bookingId, setBookingId] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedBookingId = generateBookingId();
    setFormSubmitted(true);
    setBookingId(generatedBookingId);
  };

  const generateBookingId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomString}`;
  };

  if (formSubmitted) {
    return <BookingConfirmation bookingId={bookingId} name={name} email={email} mobile={mobile} />;
  }
  return (
    <div className="booking-form">
    <h1>Book Ticket</h1>
      <h4>Enter the Detail</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mobile:
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
