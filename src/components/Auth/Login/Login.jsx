import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(email, password)
      navigate('/dashboard');
    }
    catch (error) {
      setError("Failed to Access Account: Check Email or Password and try again ")
    }

  }

  return (
    <div className='d-flex flex-column align-items-center' style={{ width: "100%" }}>
      <Card className='p-4' style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className='text-center mb-4'>Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
            </Form.Group>
            <Button variant='primary' type="submit" className='w-100 mt-4'>Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 d-flex align-items-center justify-content-center mt-2 gap-2'>
        Don't have an account ? <Link to="/login">Create an account</Link>
      </div>
    </div>
  )
}

export default Login