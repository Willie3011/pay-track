import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext'; 

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { signup } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault();
        
        //Check if Password Matches 
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }
        
        try {
            setError("");
            await signup(email, password)
            
        }
        catch (error) {
            setError("Failed to create an account " + error)
        }

    }

    return (
        <div className='d-flex flex-column align-items-center' style={{width: "100%"}}>
            <Card className='p-4' style={{maxWidth: "400px", width: "100%"}}>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2" controlId="Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control  className="mb-4" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmn password" />
                        </Form.Group>
                        <Button variant='primary' type="submit" className='w-100'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 d-flex align-items-center justify-content-center mt-2 gap-2'>
                Already have an account ? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Signup