import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Hero(props){
  return(
    <Jumbotron className="bg-transparent Jumbutron-fluid p-4">
      <Container fluid={true}>
        <Row>
          <Col md={12}>
            {props.title && <h4 className="display-3 font-weight-bolder">{props.title}</h4>}
            { props.subTitle && <h5 className="display-4 font-weight-light">{props.subTitle}</h5> }
            { props.text && <h5 className="lead font-weight-light">{props.text}</h5> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Hero
