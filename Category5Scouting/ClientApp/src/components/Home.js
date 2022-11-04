import React, { useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
  static displayName = Home.name;

  constructor (props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = {
      count: 0
    };
  }

  clicked () {
    this.setState({
      count: this.state.count + 1
    });
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <div className="d-grid">
              <Button onClick={this.clicked} variant="primary" size="lg">
                Button {this.state.count}
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="primary" size="lg">
                Button
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
