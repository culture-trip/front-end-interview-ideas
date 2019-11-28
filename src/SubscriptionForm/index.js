import React from 'react';
import './index.css';

export const SubscriptionForm = () => {
  const [email, setEmail] = React.useState('');
  const [isFormSent, setIsFormSent] = React.useState(false);

  const sendForm = () => {
    if (email) setIsFormSent(true);
  };

  return (
    <div>
      <h2>Subscription Form</h2>
      <div>
        <div className="subscribe-form">
          <p>Enter your email:</p>
          <p><input value={email} onChange={e => setEmail(e.target.value)} data-testid="email"/></p>
          <p>Click to subscribe:</p>
          <a href="#" role="button" onClick={sendForm}>Click</a>
        </div>
        { isFormSent ? <p data-testid="submit-message">Submitted by {email}</p> : null }
      </div>
    </div>
  )
};


