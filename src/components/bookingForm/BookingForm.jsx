import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../calendar/Calendar';
import './BookingForm.css';
import hotelData from '../../data/hotels-details.json';

const BookingForm = ({ selectedHotelId, selectedRoomType }) => {
  const navigate = useNavigate();
  
  const selectedHotel = hotelData.find(hotel => hotel.id === selectedHotelId) || hotelData[0];
  const selectedRoom = selectedHotel.rooms.find(room => room.type === selectedRoomType) || selectedHotel.rooms[0];
  
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'standard',
    fullName: '',
    birthDate: '',
    familyMembers: [],
    streetAddress: '',
    postCode: '',
    city: '',
    email: '',
    phonePrefix: '',
    phoneNumber: ''
  });

  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  // Calculate number of nights between check-in and check-out
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log('Number of nights:', diffDays); // Debug log
    return diffDays;
  };

  // Calculate total cost
  const calculateTotalCost = () => {
    const nights = calculateNights();
    const basePrice = selectedRoom.pricePerNight || 0; // Use price from selected room
    const roomTotal = basePrice * nights;
    const additionalGuestFee = formData.adults > 1 ? (formData.adults - 1) * 50 : 0;
    const childrenFee = formData.children * 30;
    const serviceFee = roomTotal * 0.1; // 10% service fee
    
    console.log('Cost calculation:', {
      nights,
      basePrice,
      roomTotal,
      additionalGuestFee,
      childrenFee,
      serviceFee
    });
    
    return {
      basePrice,
      nights,
      roomTotal,
      additionalGuestFee,
      childrenFee,
      serviceFee,
      total: roomTotal + additionalGuestFee + childrenFee + serviceFee
    };
  };

  const costs = calculateTotalCost();

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
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Booking Confirmed! Redirecting to home page...');
    
    // Navigate to home page after a short delay
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const addFamilyMember = () => {
    setFormData(prevState => ({
      ...prevState,
      familyMembers: [
        ...prevState.familyMembers,
        { fullName: '', birthDate: '' }
      ]
    }));
  };

  const removeFamilyMember = (index) => {
    setFormData(prevState => ({
      ...prevState,
      familyMembers: prevState.familyMembers.filter((_, i) => i !== index)
    }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      familyMembers: prevState.familyMembers.map((member, i) => {
        if (i === index) {
          return { ...member, [field]: value };
        }
        return member;
      })
    }));
  };

  return (
    <div className="main-content">
      <div className="form-section">
        <div className="form-card">
          <h2>Guest Details</h2>
          <div className="form-group">
            <label>Primary Guest</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name" 
            />
            <input 
              type="date" 
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Secondary Guests */}
          {formData.familyMembers.map((member, index) => (
            <div className="form-group family-member" key={index}>
              <div className="family-member-header">
                <label>Secondary Guest {index + 1}</label>
                <button 
                  type="button" 
                  className="remove-member-btn"
                  onClick={() => removeFamilyMember(index)}
                >
                  ✕
                </button>
              </div>
              <input 
                type="text" 
                value={member.fullName}
                onChange={(e) => handleFamilyMemberChange(index, 'fullName', e.target.value)}
                placeholder="Enter Full Name" 
              />
              <input 
                type="date" 
                value={member.birthDate}
                onChange={(e) => handleFamilyMemberChange(index, 'birthDate', e.target.value)}
                placeholder="DD/MM/YYYY"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
          ))}

          <button 
            type="button" 
            className="add-member-btn"
            onClick={addFamilyMember}
          >
            + Add Secondary Guest
          </button>
        </div>

        <div className="form-card">
          <h2>Billing Details</h2>
          <input 
            type="text" 
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Enter Street Address" 
          />
          <input 
            type="text" 
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
            placeholder="Enter Post Code" 
          />
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City" 
          />
        </div>

        <div className="form-card">
          <h2>Contact Information</h2>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address" 
          />
          <div className="phone-input-group">
            <input 
              type="text" 
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleChange}
              placeholder="Enter Prefix" 
            />
            <input 
              type="text" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number" 
            />
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2>Location:</h2>
        <p>{selectedHotel.location}</p>
        <h2>Accommodation:</h2>
        <p>{selectedHotel.name}</p>
        <h2>Rating:</h2>
        <p>{selectedHotel.ratings} Stars</p>
        <h2>Room Type:</h2>
        <p>{selectedRoom.type}</p>
        <h2>Check-In Date:</h2>
        <div className="date-inputs">
          <input
            type="text"
            value={formData.checkIn}
            onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
            readOnly
            placeholder="Select Check-in"
          />
          {showCheckInCalendar && (
            <div className="calendar-popup">
              <Calendar 
                onDateSelect={(date) => handleDateSelect('checkIn', date)}
                selectedDate={formData.checkIn ? new Date(formData.checkIn) : null}
              />
            </div>
          )}
          <input
            type="text"
            value={formData.checkOut}
            onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
            readOnly
            placeholder="Select Check-out"
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
        <div className="cost-breakdown">
          <p>Room Price: €{costs.basePrice} × {costs.nights} nights = €{costs.roomTotal}</p>
          {costs.additionalGuestFee > 0 && (
            <p>Additional Guest Fee: €{costs.additionalGuestFee}</p>
          )}
          {costs.childrenFee > 0 && (
            <p>Children Fee: €{costs.childrenFee}</p>
          )}
          <p>Service Fee: €{costs.serviceFee}</p>
          <h3>TOTAL COST: €{costs.total}</h3>
        </div>
        <button 
          className="confirm-btn" 
          onClick={handleSubmit}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
