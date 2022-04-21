import React from "react";
import {Form,Row,Col,Button} from 'react-bootstrap'

function Layout() {
  return (
    <div>

      <div className="login">
        <div className="div-1">
          <h1>Login To Your Account</h1>
        </div>
        <div className="form">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                Password
            
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
                
              <Col sm={12} className="btn">
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Layout;