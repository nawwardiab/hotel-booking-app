import React from "react";

const PaymentMethods = ({ selected, onSelect }) => {
  const methods = [
    { id: "card", name: "Credit Card", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "P" },
    { id: "bank", name: "Bank Transfer", icon: "🏦" },
  ];

  return (
    <div className="methods">
      {methods.map((method) => (
        <button
          key={method.id}
          className={`method-button ${
            selected === method.id ? "selected" : ""
          }`}
          onClick={() => onSelect(method.id)}
        >
          <span className="method-icon">{method.icon}</span>
          <span className="method-name">{method.name}</span>
        </button>
      ))}
    </div>
  );
};

export default PaymentMethods;
