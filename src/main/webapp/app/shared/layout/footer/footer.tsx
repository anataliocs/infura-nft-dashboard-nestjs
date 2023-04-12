import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <hr />
    <br />
    <Row>
      <Col md="4">
        <p></p>
      </Col>
      <Col md="4">
        <p>
          Powered by the Infura NFT API <img src="content/images/logo-infura2.png" alt="Logo" />
        </p>
        <br />
      </Col>
      <Col md="4">
        <p></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
