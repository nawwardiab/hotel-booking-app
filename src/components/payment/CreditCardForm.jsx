import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './CreditCardForm.css';
import CreditCardForm from '../../components/payment/CreditCardForm';

const CreditCardForm = ({ onSubmit }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(cardData);
    }
  };

  return (
    <div className="credit-card-form">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div className="card-front">
          <div className="card-number">{cardData.number || '•••• •••• •••• ••••'}</div>
          <div className="card-name">{cardData.name || 'FULL NAME'}</div>
          <div className="card-expiry">{cardData.expiry || 'MM/YY'}</div>
        </div>

        {/* Back of the card */}
        <div className="card-back">
          <div className="card-stripe"></div>
          <div className="card-cvc">{cardData.cvc || '•••'}</div>
        </div>
      </ReactCardFlip>

      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={cardData.number}
            onChange={handleInputChange}
            onFocus={() => setIsFlipped(false)}
            maxLength="16"
          />
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
              maxLength="4"
            />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cardData.cvc}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(true)}
              maxLength="3"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm; 