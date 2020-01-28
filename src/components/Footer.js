import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './footer.css';

 function Footer(){
   return(
     <footer className="mt-5">
        <Row className="border-top justify-content-between p=3">
          <Col className="p=0" sm={8}>
          <a href="https://www.facebook.com/fabisch.kamau" target="_blank"><img id="footer" src={require('./images/fb.png')}/></a><a href="https://www.facebook.com/fabisch.kamau" target="_blank"><h6>Follow me on Facebook</h6></a>
          <a href="https://www.instagram.com/fabisch678/" target="_blank"><img id="footer" src={require('./images/ig.jpeg')}/></a><a href="https://www.facebook.com/fabisch.kamau" target="_blank"><h6>Follow me on Instagram</h6></a>
          <a href="https://twitter.com/kamaufabisch111" target="_blank"><img id="footer" src={require('./images/twitter.jpeg')}/></a><a href="https://www.facebook.com/fabisch.kamau" target="_blank"><h6>Follow me on Twitter</h6></a>
          </Col>
          <Col className="p=0  mg=3" sm={4}>
            <div id="cc">
            <h6>Phone: +254 702417802,</h6>
            <h6>Email: kamaufabisch1175@gmail.com, fkamau322@gmail.com</h6>
            <h6>{'\u00A9'}This site was made by Fabisch.</h6>
            </div>
          </Col >

        </Row>
     </footer>
   );
 }
 export  default Footer
