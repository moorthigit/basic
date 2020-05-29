import React, { Component } from 'react'
import './Navbar.css';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import history from '../history';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginid: '',
            style: '',
            hidemodel: '',
            username: localStorage.getItem('name'),
        }

    }
    handleLogin = (e) => {
        if (localStorage.getItem('key') == null) {
            history.push("/Login");
            this.setState({ style: { display: 'none' } })
        } else {
            this.setState({ hidemodel: true })
        }

    }
    handleLogout = () => {
        localStorage.clear();
        history.push("/Home");
        this.setState({ hidemodel: false })
    }
    // console.log(props);
    componentDidMount() {
        this.setState({ username: localStorage.getItem('name') })
    }
    render() {
        const style = this.state.hidemodel ? true : false;
        return (
            <div>
                <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand href="/home">ASCARD</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" variant="pills" className="justify-content-center">
                        <Nav variant="pills" >
                            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
                            <Nav.Link onClick={() => history.push("/Group")}>Group</Nav.Link>
                            <Nav.Link onClick={() => history.push("/Template")}>Template</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link onClick={this.handleLogin}>
                        <FaRegUserCircle />
                    </Nav.Link>
                </Navbar>
                <Modal show={style} centered >
                    <Modal.Header>
                        <Modal.Title>Log out alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you want to logout <b>{this.state.username}</b></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.setState({ hidemodel: false }) }}>Cancel</Button>
                        <Button variant="primary" onClick={this.handleLogout}>logout</Button>
                    </Modal.Footer>
                </Modal>
                {/* </div> */}
            </div>
        )
    }
}

export default withRouter(Navigation);



