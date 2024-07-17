import { useState } from "react";
import { Card, Form, Button, Stack } from "react-bootstrap";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { sendPasswordReset } = useAuth();
  const navigate = useNavigate();

  function handleReset(e) {
    e.preventDefault();
    try {
      sendPasswordReset(email);
      navigate("/login")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className=" d-flex align-items-center justify-content-center"
      style={{ width: "100%", minHeight: "100vh" }}>
      <Card className="w-100">
        <Card.Body>
          <Card.Title className="text-center">Forgot Password</Card.Title>
          <Card.Text className="text-center">
            Seems like you forgot your password, no worries we can help you.
            Just enter your email address
          </Card.Text>
          <Form onSubmit={handleReset}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Form.Group>
            <Stack
              direction="horizontal"
              className="mt-2 d-flex justify-content-end"
              gap={2}>
              <Button variant="light" type="button">Cancel</Button>
              <Button variant="success" type="submit">
                Reset Password
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ForgotPassword;
