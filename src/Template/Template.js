import React, { Component } from 'react';
import { Row, Col, Button, Form, FormControl, Accordion, Card, Container, Dropdown } from 'react-bootstrap';
import Navigation from '../components/Navbar';
import '../Template/Template.css';
import { MdDelete } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import history from '../history';



class Template extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accord: [
                {
                    name: "template1",
                    body: "template 1 body",
                },
                {
                    name: 'template2',
                    body: "template 2 body",
                },
                {
                    name: "template3",
                    body: "template 3 body",
                },
                {
                    name: "template4",
                    body: "template 4 body",
                },
                {
                    name: "template5",
                    body: "template 5 body",
                }
            ],
            searchquery: '',
            sortQuery:'',
        }

    }
    handleSearch = (e) => {
        this.setState({ searchquery: e.target.value.toLowerCase() })
    }
    handleSort =(e)=>{
        console.log(e.target.value)
        this.setState({sortQuery:e.target.value})
    }

    render() {
        let user = this.state.accord;
        const query = this.state.searchquery;
        let srtqry = this.state.sortQuery;
        if (query.length > 0) {
            user = user.filter((element) => {
                return element.name.toLowerCase().match(query);
            });
        }
        if(srtqry>0){
            user = user.slice(0,srtqry)
        }
        return (
            <div>
                <Navigation />
                {/* <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}> */}
                <Container>
                    <Row style={{ padding: 20 }}>
                        <Col>
                            <div><h3 style={{ marginBottom: 0 }}>Template</h3></div>
                        </Col>
                        <Col></Col>
                        <Col>
                            <Row>
                                <Col></Col>
                                <Col><Button variant="success" onClick={() => history.push("/CreateTemplate")} >Create Template</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ marginTop: 0 }} />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <br />
                            <Form>
                                <Form.Group>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearch} />
                                </Form.Group>
                                <select id="cars" onClick={this.handleSort}>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>
                                {user.map((val, i) =>
                                    <Accordion defaultActiveKey="0" key={i}>
                                        <Form.Group>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                {val.name} <FaChevronDown style={{ float: "right" }} />
                                            </Accordion.Toggle>
                                        </Form.Group>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>{val.body}<hr /><MdDelete onClick={() => this.removeItem(i)} style={{ float: "right" }} /></Card.Body>
                                        </Accordion.Collapse>
                                    </Accordion>
                                )}
                                {/* <Button varient="primary" onClick={()=>{console.log(this.props.name)}} >get</Button>
                        {this.props.name} */}
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Template