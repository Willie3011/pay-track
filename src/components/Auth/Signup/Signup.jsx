import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";
import { Container } from "react-bootstrap";

function Signup() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    //Check if Password Matches
    if (formValues.password !== formValues.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await signup(formValues.email, formValues.password);
      
      //clear form
      setFormValues({email: "", password:"", confirmPassword: ""});
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to create an account " + error);
    }
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", minHeight: "100vh" }}>
      <Card
        className="p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-2">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="Email">
              <Form.Label className="mb-0">Full Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                placeholder="e.g. john doe"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="Email">
              <Form.Label className="mb-0">Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="e.g. johndoe@gmail.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label className="mb-0">Password</Form.Label>
              <Form.Control
              name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
              name="confirmPassword"
                type="password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required
              />
              <Form.Text id="passwordHelpBlock" muted className="mb-4">
                Password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces or special characters.
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 d-flex align-items-center justify-content-center mt-2 gap-2">
        Already have an account ? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
