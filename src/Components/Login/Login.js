import React, { useState } from 'react'

import { Button, Form, Container, Row } from 'react-bootstrap';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password);

    return (
        <div>
            <Container>
                <h1>LOGIN PAGE</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group> 

                    <Button variant="primary" type="submit">Submit</Button>
                    <Row container>
                        <Row item xs>
                            <a href="#" variant="">Create New User!</a>
                        </Row>

                    </Row>


                </Form>
            </Container>
        </div>
    )
}