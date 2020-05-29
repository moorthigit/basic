import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button,Container } from 'react-bootstrap';
import Navigation from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import history from '../history';

export default class CreateTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plateform: "",
            tempname: "",
            tempval: "",
        }
        this.initialstate = this.state;
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(value);
    }
    handleSave = () => {
        // const obj = 
        //     {
        //         name: this.state.tempname,
        //         body: this.state.tempval
        //     }
        
        // localStorage.setItem('key',JSON.stringify(obj))
        alert("created");
        this.setState(this.initialstate);
    }
    handleReset = () => {
        this.setState(this.initialstate);
    } 
    render() {
        return (
            <div>
                <Navigation />
                <Container>
                <Row style={{ padding: 20,position: "relative" }}>
                    <Col>
                        <div title="nomore"><h3 style={{ marginBottom: 0 }}><FaChevronLeft onClick={() => history.goBack()} />Create Template</h3></div>
                    </Col>
                    <Col></Col>
                    <Col>
                    </Col>
                </Row>
                </Container>
                <hr style={{ marginTop: 0 }} />
                <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Form >
                            <Form.Group>
                                <select className="browser-default custom-select" name="plateform" onChange={this.handleChange}>
                                    <option>Type</option>
                                    <option>SMS</option>
                                    <option>Whatsapp</option>
                                    <option>Email</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                                <FormControl type="text" placeholder="Template Name" className="mr-sm-2" name="tempname" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Max 160 characters" rows="3" name="tempval" onChange={this.handleChange} />
                            </Form.Group>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col><Button variant="success" style={{ float: "right" }} onClick={this.handleSave}>Create</Button><Button variant="secondary" style={{ float: "left" }} type="reset">Reset</Button></Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </div>
        )
    }
}
