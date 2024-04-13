import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import "./styles.css";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(emailRegex.test(email));
  };

  const validatePassword = () => {
    setPasswordValidated(password.length >= 8);
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordValidated(confirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div id="signUpForm">
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label><br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          style={{ borderColor: emailValidated ? 'green' : 'red' }}
        />
        {!emailValidated && <div style={{ color: 'red' }}>Please enter a valid email address</div>}
      </div>
      <div>
        <label>Password:</label><br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
        />
        {!passwordValidated && <div style={{ color: 'red' }}>Password must be at least 8 characters long</div>}
      </div>
      <div>
        <label>Confirm Password:</label><br></br>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validateConfirmPassword}
        />
        {!confirmPasswordValidated && <div style={{ color: 'red' }}>Passwords do not match</div>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SignUpForm/>);


