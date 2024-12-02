import React, { useState } from 'react';
import Calendar from '../calendar/Calendar';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'standard'
  });

  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const handleDateSelect = (type, date) => {
    setFormData(prevState => ({
      ...prevState,
      [type]: date.toISOString().split('T')[0]
    }));
    if (type === 'checkIn') {
      setShowCheckInCalendar(false);
    } else {
      setShowCheckOutCalendar(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="checkIn">Check-in Date:</label>
          <input
            type="text"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
            readOnly
            required
          />
          {showCheckInCalendar && (
            <div className="calendar-popup">
              <Calendar 
                onDateSelect={(date) => handleDateSelect('checkIn', date)}
                selectedDate={formData.checkIn ? new Date(formData.checkIn) : null}
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="checkOut">Check-out Date:</label>
          <input
            type="text"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
            readOnly
            required
          />
          {showCheckOutCalendar && (
            <div className="calendar-popup">
              <Calendar 
                onDateSelect={(date) => handleDateSelect('checkOut', date)}
                selectedDate={formData.checkOut ? new Date(formData.checkOut) : null}
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="adults">Adults:</label>
          <select
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="children">Children:</label>
          <select
            id="children"
            name="children"
            value={formData.children}
            onChange={handleChange}
          >
            {[0, 1, 2, 3].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="standard">Standard Room</option>
            <option value="economy">Economy Room</option>
            <option value="Luxury"> Luxury Suite</option>
            <option value="executive">Executive Suite</option>
            <option value="cabin">Cabin Suite</option>
            <option value="ocean">Ocean View Room</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
