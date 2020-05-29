import React, { Component } from 'react';
import Navigation from '../components/Navbar';
import { Row, Col, Button, FormControl, Card,Container} from 'react-bootstrap';
import "../Group/Group.css";
import history from '../history'
class Group extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Container>
                <Row style={{ padding: 20 }}>
                    <Col>
                        <div><h3 style={{marginBottom:0}}> Group </h3></div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Row>
                            <Col></Col>
                            <Col><Button variant="success" onClick={()=>history.push("/querybuilder")} >Create Group</Button></Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
                <hr style={{ marginTop: 0 }} />
                <Container>
                <div className="sidenav">
                    <h6>Group List</h6>
                    <hr/>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                    7 Groups
                    <br/>
                    <Card bg="success" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>
                                Tamil
                                560 customers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
              <div className="main">
                  <Row>
                      <Col></Col>
                      <Col xs={5}>
                          <Card bg="light">
                              <Card.Body>
                                  <Card.Text>
                                      Tamil 350 customers Created by hari() Created date time 11 may 2020, 11.30 
                                  </Card.Text>                                  
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col></Col>
                  </Row>
            </div>
            </Container>
            </div >

        );
    }
}

export default Group;