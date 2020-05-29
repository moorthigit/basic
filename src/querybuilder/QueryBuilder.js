import React, { Component } from 'react'
import {Query, Builder, BasicConfig, Utils as QbUtils} from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss';
import Navigation from '../components/Navbar';
import {Row, Col, Container } from 'react-bootstrap';
import { FaChevronLeft } from "react-icons/fa";
import history from '../history';



const config = {
  ...BasicConfig,
  fields: {
    dt: {
      label: 'Date',
      type: 'date',
      fieldSettings: {
        min: new Date(),
    },
      valueSources: ['value'],
      preferWidgets: ['date'],
  },
    qty: {
        label: 'Qty',
        type: 'number',
        fieldSettings: {
            min: 0,
        },
        valueSources: ['value'],
        preferWidgets: ['number'],
    },
    price: {
        label: 'Price',
        type: 'number',
        valueSources: ['value'],
        fieldSettings: {
            min: 10,
            max: 100,
        },
        preferWidgets: ['slider', 'rangeslider'],
    },
    color: {
        label: 'Color',
        type: 'select',
        valueSources: ['value'],
        listValues: [
          { value: 'yellow', title: 'Yellow' },
          { value: 'green', title: 'Green' },
          { value: 'orange', title: 'Orange' }
        ],
    },
    is_promotion: {
        label: 'Promo?',
        type: 'boolean',
        operators: ['equal'],
        valueSources: ['value'],
    },
  }
};
 
const queryValue = {"id": QbUtils.uuid(), "type": "group"};

export default class QueryBuilder extends Component {
    state = {
        tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
        config: config
      };
      
      render = () => (
        <div>
          <Navigation />
          <Container>
          <Row style={{ padding: 20 }}>
          <Col>
            <div><h3 style={{marginBottom:0}}><FaChevronLeft onClick={()=>history.goBack()}></FaChevronLeft>Create New Group</h3></div>
          </Col>
          <Col></Col>
          {/* <Col>
            <Row>
              <Col></Col>
              <Col><Button variant="success" >Compose</Button></Col>
            </Row>
          </Col> */}
        </Row>
        </Container>
        <hr style={{ marginTop: 0 }} />
        <Container>
          <Query
              {...config} 
              value={this.state.tree}
              onChange={this.onChange}
              renderBuilder={this.renderBuilder}
          />
          {this.renderResult(this.state)}
          </Container>
        </div>
      )
    
      renderBuilder = (props) => (
        <div className="query-builder-container" style={{padding: '10px'}}>
          <div className="query-builder qb-lite">
              <Builder {...props} />
          </div>
        </div>
      )
    
      renderResult = ({tree: immutableTree, config}) => (
        <div className="query-builder-result">
              <div>Query string: <pre>{JSON.stringify(QbUtils.queryString(immutableTree, config))}</pre></div>
              <div>MongoDb query: <pre>{JSON.stringify(QbUtils.mongodbFormat(immutableTree, config))}</pre></div>
              <div>SQL where: <pre>{JSON.stringify(QbUtils.sqlFormat(immutableTree, config))}</pre></div>
              <div>JsonLogic: <pre>{JSON.stringify(QbUtils.jsonLogicFormat(immutableTree, config))}</pre></div>
              <div> <p>hello!</p></div>
        </div>
       
      )
      
      onChange = (immutableTree, config) => {
        this.setState({tree: immutableTree, config: config});
        QbUtils.getTree(immutableTree);
      }

}
