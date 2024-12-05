import React, { useContext, useState } from 'react';
import { BookingContext } from '../../context/BookingContext';
import Calendar from '../calendar/Calendar';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { bookingDetails, updateBookingDetails } = useContext(BookingContext);
  const [familyMembers, setFamilyMembers] = useState([{ id: 1 }]);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const navigate = useNavigate();

  const calculatePrice = () => {
    if (!bookingDetails.checkIn || !bookingDetails.checkOut) {
      return {
        nights: 0,
        roomTotal: 0,
        taxesAndFees: 0,
        total: 0
      };
    }

    const checkIn = new Date(bookingDetails.checkIn);
    const checkOut = new Date(bookingDetails.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const roomTotal = nights * bookingDetails.pricePerNight;
    const taxesAndFees = roomTotal * 0.1; // 10% tax
    const total = roomTotal + taxesAndFees;

    return {
      nights,
      roomTotal,
      taxesAndFees,
      total
    };
  };

  const handleCheckInSelect = (date) => {
    updateBookingDetails({
      ...bookingDetails,
      checkIn: date
    });
    setShowCheckInCalendar(false);
  };

  const handleCheckOutSelect = (date) => {
    updateBookingDetails({
      ...bookingDetails,
      checkOut: date
    });
    setShowCheckOutCalendar(false);
  };

  const addFamilyMember = () => {
    const newMember = {
      id: familyMembers.length + 1,
    };
    setFamilyMembers([...familyMembers, newMember]);
  };

  const removeFamilyMember = (id) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const { nights, roomTotal, taxesAndFees, total } = calculatePrice();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="main-booking">
      <div className="form-section">
        <div className="form-card">
          <h2>Primary Guest</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <div className="phone-input-group">
              <input type="text" placeholder="+1" />
              <input type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
        </div>

        <div className="form-card">
          <h2>Family Members</h2>
          {familyMembers.map((member) => (
            <div key={member.id} className="family-member">
              <div className="family-member-header">
                <h3>Family Member {member.id}</h3>
                {familyMembers.length > 1 && (
                  <button
                    className="remove-member-btn"
                    onClick={() => removeFamilyMember(member.id)}
                  >
                    ×
                  </button>
                )}
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="number" placeholder="Enter age" />
              </div>
            </div>
          ))}
          <button className="add-member-btn" onClick={addFamilyMember}>
            + Add Family Member
          </button>
        </div>
      </div>

      <div className="summary-section">
        <h2>Booking Summary</h2>
        <div className="booking-details-column">
          <div className="summary-item">
            <span className="summary-label">Location</span>
            <span className="summary-value">{bookingDetails?.location || 'Not specified'}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">Hotel</span>
            <span className="summary-value">{bookingDetails?.hotelName || 'Not specified'}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">Room Type</span>
            <span className="summary-value">{bookingDetails?.roomType || 'Not specified'}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">Rating</span>
            <span className="summary-value">{bookingDetails?.ratings ? `${bookingDetails.ratings} ⭐` : 'Not rated'}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">Check-in Date</span>
            <div className="date-picker">
              <input
                type="text"
                value={formatDate(bookingDetails.checkIn)}
                onClick={() => {
                  setShowCheckInCalendar(!showCheckInCalendar);
                  setShowCheckOutCalendar(false);
                }}
                readOnly
                placeholder="Select check-in date"
              />
              {showCheckInCalendar && (
                <div className="calendar-popup">
                  <Calendar
                    onDateSelect={handleCheckInSelect}
                    selectedDate={bookingDetails.checkIn}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-label">Check-out Date</span>
            <div className="date-picker">
              <input
                type="text"
                value={formatDate(bookingDetails.checkOut)}
                onClick={() => {
                  setShowCheckOutCalendar(!showCheckOutCalendar);
                  setShowCheckInCalendar(false);
                }}
                readOnly
                placeholder="Select check-out date"
              />
              {showCheckOutCalendar && (
                <div className="calendar-popup">
                  <Calendar
                    onDateSelect={handleCheckOutSelect}
                    selectedDate={bookingDetails.checkOut}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cost-breakdown">
          <p>Number of Nights: {nights}</p>
          <p>Room Rate: ${bookingDetails.pricePerNight} × {nights} nights</p>
          <p>Room Total: ${roomTotal}</p>
          <p>Taxes & Fees: ${taxesAndFees.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>

        <button onClick={handleProceedToPayment} className="confirm-btn">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
