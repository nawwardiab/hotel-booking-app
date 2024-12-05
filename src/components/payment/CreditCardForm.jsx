import React, { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { BookingContext } from "../../context/BookingContext";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
  FaShieldAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";
import "./CreditCardForm.css";
import BookingSummary from "./BookingSummary";

const CreditCardForm = () => {
  const { bookingDetails } = useContext(BookingContext);
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "number") {
      formattedValue =
        value
          .replace(/\s/g, "")
          .match(/.{1,4}/g)
          ?.join(" ") || "";
    }
    // Format expiry date with slash
    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const validateForm = () => {
    const { number, name, expiry, cvc } = cardData;
    return (
      number.replace(/\s/g, "").length === 16 &&
      name.length > 2 &&
      expiry.length === 5 &&
      cvc.length === 3
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill in all fields correctly");
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate booking ID
      const bookingId = "BOK" + Date.now();

      // Navigate to confirmation with booking details
      navigate("/confirmation", {
        state: {
          bookingDetails: {
            ...bookingDetails,
            bookingId,
            paymentStatus: "completed",
            paymentDate: new Date().toISOString(),
            lastFourDigits: cardData.number.slice(-4),
          },
        },
      });
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="credit-container">
      {/* <div className="booking-summary">
        <h2>Booking Summary</h2>
        <div className="summary-details">
          <p><strong>Hotel:</strong> {bookingDetails?.hotelName}</p>
          <p><strong>Room Type:</strong> {bookingDetails?.roomType}</p>
          <p><strong>Check-in:</strong> {bookingDetails?.checkIn?.toLocaleDateString()}</p>
          <p><strong>Check-out:</strong> {bookingDetails?.checkOut?.toLocaleDateString()}</p>
          <div className="price-breakdown">
            <p><strong>Room Total:</strong> ${bookingDetails?.roomTotal}</p>
            <p><strong>Taxes & Fees:</strong> ${(bookingDetails?.roomTotal * 0.1).toFixed(2)}</p>
            <h3><strong>Total:</strong> ${(bookingDetails?.roomTotal * 1.1).toFixed(2)}</h3>
          </div>
        </div>
      </div> */}
      {/* <BookingSummary /> */}

      <div className="credit-card-form">
        <h2>Payment Details</h2>
        <div className="security-badges">
          <div className="badge">
            <FaLock /> Secure Payment
          </div>
          <div className="badge">
            <FaShieldAlt /> Protected
          </div>
          <div className="badge">
            <FaCreditCard /> SSL Encrypted
          </div>
        </div>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="card-front">
            <div className="card-number">
              {cardData.number || "•••• •••• •••• ••••"}
            </div>
            <div className="card-name">{cardData.name || "FULL NAME"}</div>
            <div className="card-expiry">{cardData.expiry || "MM/YY"}</div>
          </div>

          <div className="card-back">
            <div className="card-stripe"></div>
            <div className="card-cvc">{cardData.cvc || "•••"}</div>
          </div>
        </ReactCardFlip>

        <form className="card-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <div className="input-wrapper">
              <FaCreditCard className="input-icon" />
              <input
                type="text"
                name="number"
                placeholder="1234 5678 9012 3456"
                value={cardData.number}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(false)}
                maxLength="19"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Cardholder Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name on Card"
              value={cardData.name}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(false)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(false)}
                maxLength="5"
              />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(true)}
                maxLength="3"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`pay-button ${isProcessing ? "processing" : ""}`}
            disabled={isProcessing || !validateForm()}
          >
            {isProcessing ? (
              <>Processing...</>
            ) : (
              <>Pay ${(bookingDetails?.roomTotal * 1.1).toFixed(2)}</>
            )}
          </button>
        </form>

        <div className="payment-footer">
          <p>
            <FaCheckCircle className="secure-icon" />
            Your payment information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
