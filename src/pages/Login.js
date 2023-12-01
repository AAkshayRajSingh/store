import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import users from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/userss.json"; // Import user data
import loginImage from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/patient.png"; // Import your image
import videoBackground2 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/login.mp4';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Find the user in the user.json file based on the entered email
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Successful login
      navigate("/otp-verification");
    } else {
      setError("Wrong credentials. Please try again.");
    }
  }

  return (
    <div className="Login">
    <video autoPlay muted loop id="video-background" className="video-background">
    <source src={videoBackground2} type="video/mp4" />
  </video>
      <div className="login-header">
        <img src={loginImage} alt="Login" />
        <h2>Patient Login</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && <div className="error-message">{error}</div>}
        <Button
        variant="primary"
        block
        size="lg"
        type="submit"
        disabled={!validateForm()}
        style={{ backgroundColor: 'cyan', borderColor: 'cyan',color:'black' }}
      >
        Login
      </Button>
      
        <div className="register-link">
          Not registered? <Link to="/register">Register</Link>
        </div>
      </Form>
    </div>
  );
}
