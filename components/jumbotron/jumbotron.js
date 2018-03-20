// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles         from './jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div className={styles.vwrapper}>
      <Row noGutters className={styles.vrow}>
      <Col xs="12" md="5" className={styles.vcol}>
        <Row className="align-items-center">
          <Col xs="1" md="1"></Col>
          <Col xs="10" md="10">
              <h1>Think Better, Build Better</h1><br></br><h2>with UX & Design Thinking</h2>
              <p>We are Designers, Developers. Product Managers, Researchers and Consultants devoted to creating human-centered digital experiences for our clients. We offer end-to-end Research, Design, Development & Analytics as well as Trainings for teams.</p>
          </Col>
        </Row>
      </Col>

      <Col xs="4" md="3" className={styles.carouselSmall}>
        <Row className="align-items-center">
          <Col xs="12" md="12">

          </Col>
        </Row>
      </Col>

      <Col xs="8" md="4" className={styles.carouselLarge}>
        <Row className="align-items-center">
          <Col xs="12" md="12">
            <SlickCarousel />
          </Col>
        </Row>
      </Col>

      </Row>
      {props.children}
    </div>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
