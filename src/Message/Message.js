import React, { Component } from 'react';
import { Row, Col, Form, Button, Container, Modal, FormControl } from 'react-bootstrap';
import Navigation from "../components/Navbar";
import { FaChevronLeft } from 'react-icons/fa';
import history from "../history";
import { Switch, TimePicker, DatePicker } from 'antd';
 
const arr = [];

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            setShow:false,
            hideshedule: false,
            modal:'',
            moc:'',
            grp2Select:'',
            date:'',
            time:'',
            nor:'',
            platformmsg: false,
            platformmsg1:false,
            clicked: false,
            modalcol: [
                {
                    label:"group1",
                    value:"group1",
                    
                },
                {
                    label:"group2",
                    value:"group2",
                   
                },
                {
                    label:"group3",
                    value:"group3",
                    
                },
                {
                    label:"group4",
                    value:"group4",
                   
                },
                {
                    label:"group5",
                    value:"group5",
                    
                },
                {
                    label:"group6",
                    value:"group6",
                    
                },
                {
                    label:"group7",
                    value:"group7"
                },
                {
                    label:"group8",
                    value:"group8",
                    
                },
                {
                    label:"group9",
                    value:"group9",
                   
                }
            ],
            modalcheckbox:[]
     }
    //  this.onChange = this.onChange.bind(this);
    //  console.log(this.state.hideToolTip);

    }
    formValidation(){
        let formvalid = true;
        const formErr = {};
        // if(!this.state.grpSelect){
        //     alert("please choose group");
        //     formvalid = false;
        //     formErr['groupErr'] = "please choose any group";
            
        // }
        if(!this.state.moc){
            alert("Please choose moc");
            formvalid = false;
            formErr['mocErr'] = "please choose moc";
        }
        if(this.state.hideToolTip){
            if(!this.state.grp2Select){
               alert("please choose run value");
               formvalid = false;
               formErr['runvalErr'] = "please choose run value";
            }
            if(!this.state.date){
                alert("please choose date");
                formvalid = false;
                formErr['dateErr'] = "please choose date";
            }
            if(!this.state.time){
                alert("please choose time");
                formvalid = false;
                formErr['timeErr'] = "please choose time";
            }
            if(!this.state.nor){
                alert("Please choose nor");
                formvalid = false;
                
            }
        }
        return formvalid;
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.formValidation()){
            const ttl= {
                 'group' : this.state.modal,
                 'mode of comunication' : this.state.moc,
                 'run value': this.state.grp2Select,
                 'date' : this.state.date,
                 'time' : this.state.time,
                 'number of runs' : this.state.nor
            }
            console.log(ttl);
        }
    }
    handleChange= (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value})
        // const dt = e.format();
        console.log(value)
        if(value === "sms"){
            this.setState({ platformmsg: e.target.checked });
        }
        if(value === "whatsapp"){
            this.setState({ platformmsg1: e.target.checked });
        }
    }
    handleDate = (e) => {
        const {name,value} = e.format();
        this.setState({[name]:value})
        console.log(name);
    }
                
    onChange = (e) => {
        this.setState({ hideshedule: e });
    }
    handleModel = (e) => {
        if(e.target.name === "modal"){
            this.setState({clicked: true })
        }
    }
   
    checkbox = (e) =>{
        if(e.target.checked){
        const isChecked = e.target.value;
        arr.push(isChecked)
        this.setState({modalcheckbox: arr})
        console.log(this.state.modalcheckbox);
        }
    }
    
    render() {
        const style = this.state.hideshedule ?  {} : { display: 'none' };
        const show = this.state.clicked;
        return (
            <div>
                <Navigation />
                {/* <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}> */}
                
                    <Container>
                <Row style={{ padding: 20 }}>
                    <Col>
                        <div><h3 style={{ marginBottom: 0 }}><FaChevronLeft onClick={() => history.goBack()} />Compose Message</h3></div>
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
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                {/* <select className="browser-default custom-select"  onClick={this.handleChange} name="grpSelect">
                                    <option disabled selected>to</option>
                                    <option>Tamil</option>
                                    <option>Hindi</option>
                                    <option>Telugu</option>
                                    <option>Kanada</option>
                                </select> */}
                                <Form.Control type="text" name="modal" onClick={this.handleModel} onChange={this.handleChange} value={arr.toString()} readOnly/>
                            </Form.Group>
                            <Form.Group>
                                Mode of Communication
                                <Row>
                                    <Col>
                                        <Form.Check inline type='checkbox' key="sms" value="sms" label='SMS' onClick={this.handleChange} name="moc"/>
                                        <Form.Check inline type="checkbox" key="whatsapp" value="whatsapp" label="WHATSAPP" onClick={this.handleChange} name="moc"/>
                                        <Form.Check inline type="checkbox" key="email" value="email" label="EMAIL" onClick={this.handleChange} name="moc"/>
                                    </Col>
                                </Row>
                            </Form.Group>
                       
         {this.state.platformmsg ?
                          <Form.Group>
                            <Row>
                            SMS<hr style={{color:"blue"}}></hr>
                            </Row>
                            <Form.Control as="textarea" placeholder="Max 160 characters" rows="3" name="tempval"  />
                            </Form.Group>
                : '' }
               
         {this.state.platformmsg1 ? 
                            <Form.Group>
                            <Form.Group>
                            <Row>
                            Whatsapp<hr style={{color:"blue"}}></hr>
                            </Row>
                            <Form.Control as="textarea" placeholder="Max 160 characters" rows="3" name="tempval"  />
                            </Form.Group>
                            <Form.Group>
                            <Form.Control type="text" placeholder="Whatsapp Message" className="mr-sm-2" name="tempname" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Control type="file" placeholder="Upload image" className="mr-sm-2" name="Uploadimg"  />
                            </Form.Group>
                            </Form.Group>
                    : '' }
                           
                            <Form.Group>
                                Schedule Send<Switch  onChange={this.onChange} />
                            </Form.Group>
                            <div style={style}>
                                 <Container>
                            <Row>
                                <Col> 
                                <select className="form-control" onClick={this.handleChange} name="grp2select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></Col>
                                <Col>
                                    <DatePicker size="large" onChange={this.handleDate} name="date"/>
                                    {/* <Form.Control type="text" name="email" placeholder="Date"/> */}
                                    </Col>
                            </Row>
                        </Container>
                        <br />
                        <Container>
                            <Row>
                                <Col>
                                <TimePicker size="large" style={{width:'auto'}} onChange={this.handleDate} name="time"/>
                                 {/* <Form.Control type="text" name="email" placeholder="Time"/> */}
                                 </Col>
                                <Col>
                                <select className="form-control" onClick={this.handleChange} name="nor">
                                    <option>No of Runs 1</option>
                                    <option>Twice</option>
                                    <option>Thrice</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></Col>
                            </Row>
                        </Container>
                            </div>
                            <hr />
                            <Row>
                                <Col>
                                <Row>
                               <button href="#" type="reset">Reset</button><h6  href="#" style={{ marginLeft: 10 }}>Save</h6><h6 href="#" style={{ marginLeft: 10 }}>Delete</h6>
                               </Row>
                               </Col>
                                <Col></Col>
                                <Col><Button variant="success" style={{ float: "right" }} type="submit" onClick={()=>this.state}>Send</Button></Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Modal show={show} centered onHide={()=>this.setState({setShow: true})}>
                    <Modal.Header >
                        <Modal.Title>select Recipient</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearch} /> 
                     <div style={{height:64,overflow:"auto"}}>
                         <Container>
                     <Row>
                         {this.state.modalcol.map((e,i)=>{
                             return(
                                <Col xs={4} key={i}>
                                    <div>
                                <Form.Check inline type="checkbox"  value={e.value} label={e.label}onChange={e => this.checkbox(e)}/>
                                </div>
                                </Col>
                             )
                         })
                        }
                     </Row>
                     </Container>
                     </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={()=>this.setState({clicked: false})}>Apply</Button>
                    </Modal.Footer>
                </Modal>
                </Container>
            </div>
        )
    }
}
