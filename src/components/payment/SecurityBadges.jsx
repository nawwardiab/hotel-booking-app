import React from 'react';

const SecurityBadges = () => {
  return (
    <div className="security-badges">
      <div className="badge">
        <span className="icon">🔒</span>
        <span>Secure Payment</span>
      </div>
      <div className="badge">
        <span className="icon">✓</span>
        <span>SSL Encrypted</span>
      </div>
      <div className="badge">
        <span className="icon">🛡️</span>
        <span>Protected</span>
      </div>
    </div>
  );
};

export default SecurityBadges; 