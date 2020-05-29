import React, { Component } from "react";
import { Button, Row, Col, Table, Container } from 'react-bootstrap';
import "./Home.css";
import Navigation from '../components/Navbar';
import history from "../history";
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      tableData : [
        {
          date:"11/03/20",
          group:"Tamil Telugu",
          customer:"1200",
          plateform:"SMS whatsapp",
          name:"peter",
          subdate:"11/03/20",
          time:"11:30 AM",
          status:"Completed"
        },
        {
          date:"11/03/20",
          group:"Tamil Telugu",
          customer:"1200",
          plateform:"SMS whatsapp",
          name:"peter",
          subdate:"11/03/20",
          time:"11:30 AM",
          status:"Completed"
        }
      ]
    }
    axios({
      method: 'get',
      url: 'http://172.16.3.145:8080/DemoServlet/',
      headers: {
              "Content-Type": "text/plain"
            },
    })
    .then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="Home">
        <Navigation />
        <Container>
        <Row style={{ padding: 20 }}>
          <Col>
            <div><h3 style={{marginBottom:0}}>Message center</h3></div>
          </Col>
          <Col></Col>
          <Col>
            <Row>
              <Col></Col>
              <Col><Button variant="success" onClick={()=>history.push("/Message")} >Compose</Button></Col>
            </Row>
          </Col>
        </Row>
        </Container>
        <hr style={{ marginTop: 0 }} />
       
        <div style={{padding:10}}>
        <h5>Message List</h5>
        {/* <br /> */}
        <Table striped bordered hover >
          <thead >
            <tr>
              <th>Created Date</th>
              <th>To</th>
              <th>Members</th>
              <th>Mode</th>
              <th>From</th>
              <th>Sent/Scheduled Date</th>
              <th>Sent Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {this.state.tableData.map((value,i)=>
          <tr key={i}>
          <td>{value.date}</td>
          <td>{value.group}</td>
          <td>{value.customer}</td>
          <td>{value.plateform}</td>
          <td>{value.name}</td>
          <td>{value.subdate}</td>
          <td>{value.time}</td>
          <td> {value.status}</td>
          </tr>
          )}
          </tbody>
        </Table>
        </div>
     
      </div>
    );
  }
}
