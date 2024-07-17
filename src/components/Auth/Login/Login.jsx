import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e){
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(formValues.email, formValues.password);
      setFormValues({email: "", password: ""})
      navigate('/dashboard');
    }
    catch (error) {
      setError("Failed to Access Account: Check Email or Password and try again ")
    }

  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ width: "100%", minHeight: "100vh" }}>
      <Card className='p-4 shadow-sm' style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className='text-center mb-4'>Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              name='email'
              type="email" 
              value={formValues.email} 
              onChange={handleChange}
               placeholder="e.g. johndoe@gmail.com"
               required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              name='password'
              type="password" 
              value={formValues.password} 
              onChange={handleChange} 
              required />
            </Form.Group>
            <Button variant='success' type="submit" className='w-100 mt-4 '>Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 d-flex align-items-center justify-content-center mt-2 gap-2'>
        Don't have an account ? <Link to="/">Create an account</Link>
      </div>
    </div>
  )
}

export default Login