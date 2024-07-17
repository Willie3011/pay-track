import {Form, Card, Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

function Signup() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, addUser } = useAuth();
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
      setLoading(true);
      await signup(formValues.email, formValues.password).then((userCred) => {
        const user = userCred.user;
        addUser(user.uid, {name:formValues.name})
        setFormValues({name: "", email: "", password:"", confirmPassword: ""})
        setLoading(false);
        // navigate("/dashboard");
        console.log(user);
      });

      
      
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
        <h2 className="text-center mb-0">Sign Up</h2>
        <p className='text-center small mb-4'>Create an account using email address</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="Name">
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
            <Button variant="success" type="submit" className="w-100" disabled={loading ? true : false}>
              Create an Account
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
