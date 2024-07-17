import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext"

function Dashboard() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    

    console.log(currentUser)
    function Logout() {
        try {
            logout()
            navigate("/login")
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='d-flex flex-column align-items-center' style={{ width: "100%" }}>
            <Card className='p-4' style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className='text-center mb-4'>Dashboard</h2>
                <Card.Body>
                    <p><strong>Email Address:</strong> { currentUser.email }</p>
                </Card.Body>
                <Button variant='primary'>Update Profile</Button>
                
            </Card>
            <div className='w-100 d-flex align-items-center justify-content-center mt-2 gap-2'>
                <Button variant='link' onClick={() => Logout()}>Logout</Button>
            </div>
        </div>
    )
}

export default Dashboard