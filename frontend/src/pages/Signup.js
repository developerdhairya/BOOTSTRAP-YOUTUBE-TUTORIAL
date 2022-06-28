import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css"
import botImage from "../assets/bot.jpeg";

function validateImage() {

}

function Signup() {

    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');

    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }}>
                        <h1 className="text-center">Create Account</h1>
                        <div className="mx-auto" style={{ height: 100, width: 100, position: "relative" }}>
                            <img className="signup-profile-pic" src={botImage} />
                            <label htmlFor="image-upload" className="image-upload-level">
                                <i className="fas fa-plus-circle add-picture-icon" />
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png,image/jpeg" onChange={validateImage} />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Already have an account ? <Link to="/signup">Login</Link>
                            </p>
                        </div>
                    </Form></Col>
                <Col md={5} className="signup__bg"></Col>
            </Row>
        </Container>
    );
}

export default Signup;