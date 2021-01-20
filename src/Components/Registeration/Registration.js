import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            name: '',
            fname: '',
            mobile: '',
            email: '',
            gender: '',
            qualification: '',
            department: '',
            designation: '',
            category: '',
            bloodgroup: '',
            aadhar: '',
            password: '',
            confirmpassword: '',
            address: '',
            pinnno: ''
        }
    }

    async isValid() {

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log('Event', value)
    }
    registerUser = async (event) => {
        event.preventDefault();
    }

    render() {
        const { name, fname, mobile, email, gender, qualification, department, designation, category, bloodgroup, aadhar, password, confirmpassword, address, pinnno } = this.state
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formBasicName" >
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" value={name} name="name" onChange={(e) => this.handleInputChange(e)} />
                            <Form.Text></Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="formBasicFname">
                            <Form.Label>FATHER'S NAME</Form.Label>
                            <Form.Control type="fname" placeholder="Enter Father's Name" value={fname} name="fname" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="formBasicMobile">
                            <Form.Label>MOBILE NO</Form.Label>
                            <Form.Control type="mobile" placeholder="Enter Your Mobile Number" value={mobile} name="mobile" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => this.handleInputChange(e)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formBasicEmail">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} name="password" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="confirmpassword" placeholder="Confirm Password" value={confirmpassword} name="confirmpassword" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>GENDER</Form.Label>
                        <Form.Control as="select" defaultValue="Select Gender" value={gender} name="gender" onChange={(e) => this.handleInputChange(e)} >
                            <option value="">Select Gender</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="OTHERS">OTHERS</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formGridState">
                            <Form.Label>QUALIFICATION</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={qualification} name="qualification" onChange={(e) => this.handleInputChange(e)} >
                                <option value="">Select Qualification</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="DCA">DCA</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="formGridState">
                            <Form.Label>DEPARTMENT</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={department} name="department" onChange={(e) => this.handleInputChange(e)}>
                                <option value="">Select Department</option>
                                <option value="hr">HR</option>
                                <option value="sales">sales</option>
                                <option value="mg">Marketing</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="formGridState">
                            <Form.Label>DESIGNATION</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={designation} name="designation" onChange={(e) => this.handleInputChange(e)} >
                                <option value="">Select Designation</option>
                                <option value="Senior">Senior</option>
                                <option value="Junior">Junior</option>
                                <option value="Intern">Intern</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formGridState">
                            <Form.Label>SELECT CATEGORY</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={category} name="category" onChange={(e) => this.handleInputChange(e)}>
                                <option value="">Select Category</option>
                                <option value="Genral">Genral</option>
                                <option value="Obc">Obc</option>
                                <option value="Sc/St">Sc/St</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formGridState">
                            <Form.Label>BLOOD GROUP</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={bloodgroup} name="bloodgroup" onChange={(e) => this.handleInputChange(e)}>
                                <option value="A Positive">A Positive</option>
                                <option value="A Negative">A Negative</option>
                                <option value="A Unknown">A Unknown</option>
                                <option value="B Positive">B Positive</option>
                                <option value="B Negative">B Negative</option>
                                <option value="B Unknown">B Unknown</option>
                                <option value="C Positive">C Positive</option>
                                <option value="AB Negative">AB Negative</option>
                                <option value="AB Unknown">AB Unknown</option>
                                <option value="O Positive">O Positive</option>
                                <option value="O Negative">O Negative</option>
                                <option value="O Unknown">O Unknown</option>
                                <option value="Unknown">Unknown</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formGridZip">
                            <Form.Label>AADHAR NUMBER</Form.Label>
                            <Form.Control type="number" value={aadhar} name="aadhar" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="7" controlId="formGridZip">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Address" value={address} name="address" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>

                        <Form.Group as={Col} md="5" controlId="formGridZip">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="number" value={pinnno} name="pinnno" placeholder="Pin Code" onChange={(e) => this.handleInputChange(e)} />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container >
        );
    }
}

