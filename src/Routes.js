import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import history from './history';
import QueryBuilder from "./querybuilder/QueryBuilder";
import Login from "./Login/Login";
import Template from "./Template/Template";
import Group from "./Group/Group";
import CreateTemplate from "./CreateTemplate/CreateTemplate";
import Message from "./Message/Message";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Template" component={Template} />
                    <Route path="/Group" component={Group} />
                    <Route path="/Querybuilder" component={QueryBuilder} />
                    <Route path="/CreateTemplate" component={CreateTemplate} />
                    <Route path="/Message" component={Message} />
                </Switch>
            </Router>
        )
    }
}
