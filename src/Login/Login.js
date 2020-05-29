import React, { Component } from 'react'
import { Form, Button, Row, Col, Container,Alert } from 'react-bootstrap';
// import axios from 'axios';
import history from './../history';


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password: "",
            formError:{},
            error:"",
            logn: "stay login"
        }
        this.initialstate = this.state;
    }
    handleFormValidation(){
        let formErr = {};
        let formIsValid = true;

        if(!this.state.email){
            formIsValid = false;
            formErr["emailErr"] = "Enter email address";
        }else{
            let pattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(this.state.email)){
                formIsValid = false;
                formErr["emailErr"] = "Enter valid email";
            }
        }

        if(!this.state.password){
            formIsValid = false;
            formErr["passwordErr"] = "Enter password";
        }
        this.setState({formError: formErr});
        return formIsValid;
    }
    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({[name]: value});
        console.log(value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.handleFormValidation()){
        //   let tittle = this.state.email;
        //   let body = this.state.password;
        //   fetch('http://172.16.3.187:8080/SampleLogin/LoginCtl', {
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "text/plain"
        //     },
        //     body: "flag=login"/'username'
            
        // }).then((res) => res.json())
        // .then((data) =>  console.log(data))
        // .catch((err)=>  console.log(err))
        // axios({
        //   method: 'get',
        //   url: 'http://172.16.3.187:8080/SampleLogin/LoginCtl?flag=login&username='+tittle+"&password="+body,
        //   headers: {'Content-Type': 'text/plain' }
        //   })
        //   .then(function (response) {
        //       var all = response.data
        //       if(all.status){
        //         alert(all.msg);
        //           history.push("/Home")
        //       } else{
        //         alert(all.msg)
        //       this.setState({error: all.msg})
        //       }
        //   })
        //   .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //   });
        localStorage.setItem('key',this.state.logn);
        localStorage.setItem('name','hariharan')
        history.push("/Home")
        }
        }
        
     render() {
         const{emailErr,passwordErr} = this.state.formError;
        return (
            <div style={{padding:100}}>
                <Container >
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <h1> Login</h1>
                             {this.state.error&& <Alert varient="danger">{this.state.error}</Alert>}
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" name="email" placeholder="Enter email" onChange={this.handleChange} />
                                    {emailErr && <div style={{color:"red",paddingBottom:5}}>{emailErr}</div>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" autoComplete="off" placeholder="Password" onChange={this.handleChange}/>
                                    {passwordErr && <div style={{color:"red",paddingBottom:5}}>{passwordErr}</div>}
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


