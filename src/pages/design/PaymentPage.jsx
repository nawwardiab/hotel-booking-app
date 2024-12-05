import React, { useState, useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import BookingSummary from "../../components/payment/BookingSummary";
import CreditCardForm from "../../components/payment/CreditCardForm";
import { FaCreditCard, FaLock, FaShieldAlt } from "react-icons/fa";
import { SiPaypal, SiGooglepay } from "react-icons/si";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { bookingDetails } = useContext(BookingContext);
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  console.log("Processing payment for:", bookingDetails);
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handlePayment = () => {};

  const handlePaymentSubmission = (cardData) => {
    // Implement your payment processing logic here
    console.log("Processing payment with card data:", cardData);
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* <div className="booking-summary">
            <h2>Booking Summary</h2>
            <div className="summary-details">
              <p><strong>Hotel:</strong> {bookingDetails?.hotelName || 'N/A'}</p>
              <p><strong>Room Type:</strong> {bookingDetails?.roomType || 'N/A'}</p>
              <p><strong>Check-in:</strong> {bookingDetails?.checkIn?.toLocaleDateString() || 'N/A'}</p>
              <p><strong>Check-out:</strong> {bookingDetails?.checkOut?.toLocaleDateString() || 'N/A'}</p>
              <div className="price-breakdown">
                <p><strong>Room Total:</strong> ${bookingDetails?.roomTotal || 0}</p>
                <p><strong>Taxes & Fees:</strong> ${((bookingDetails?.roomTotal || 0) * 0.1).toFixed(2)}</p>
                <h3><strong>Total:</strong> ${((bookingDetails?.roomTotal || 0) * 1.1).toFixed(2)}</h3>
              </div> */}
        <BookingSummary bookingDetails={bookingDetails} />

        {/* </div> */}

        <div className="payment-form-section">
          <div className="payment-method-cont">
            <h2>Select Payment Method</h2>
            <button
              className={`method-button ${
                selectedMethod === "credit-card" ? "selected" : ""
              }`}
              onClick={() => handleMethodSelect("credit-card")}
            >
              <FaCreditCard />
              Credit Card
            </button>
            <button
              className={`method-button ${
                selectedMethod === "paypal" ? "selected" : ""
              }`}
              onClick={() => handleMethodSelect("paypal")}
            >
              <SiPaypal />
              PayPal
            </button>
            <button
              className={`method-button ${
                selectedMethod === "google-pay" ? "selected" : ""
              }`}
              onClick={() => handleMethodSelect("google-pay")}
            >
              <SiGooglepay />
              Google Pay
            </button>
          </div>

          {selectedMethod === "credit-card" && (
            <CreditCardForm onSubmit={handlePaymentSubmission} />
          )}
          {/* <CreditCardForm onSubmit={handlePaymentSubmission} /> */}
          {selectedMethod === "paypal" && (
            <div className="paypal-section">
              <p>You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}

          {selectedMethod === "google-pay" && (
            <div className="google-pay-section">
              <p>Complete your payment with Google Pay.</p>
            </div>
          )}

          {/* <button onClick={handlePayment} className="confirm-payment-button">
            Confirm Payment
          </button> */}

          {/* <div className="security-badges">
            <FaLock />
            <span>Secure Payment</span>
            <FaShieldAlt />
            <span>Protected</span>
          </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PaymentPage;
