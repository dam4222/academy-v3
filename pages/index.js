import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { Container, Row, Col } from 'reactstrap';

export default () => (
  <div>
      <Container fluid>

        <Row>
          <Col xs="11" md="11">
            <Col xs="1" md="1"></Col>
            <Col xs="3" md="3">
            </Col>
            <Col xs="3" md="3">
            </Col>
            <Col xs="3" md="3">
            </Col>
          </Col>
          <Col xs="1" md="1">
          </Col>
        </Row>

        <Row>
          <Col xs="6" md="6">
            <img src="" />
          </Col>

          <Col xs="6" md="6">
          <h1>Our Work</h1><br></br><h2>is Human Centered</h2>
            <Link
              className="link"
              to={'#'}>
              See Our Work
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="12">
            <Col xs="12" md="8">
              <img src="" />
              <h1>Our Process</h1><br></br><h2>is Collaborative</h2>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12">
            <Col xs="12" md="4">
                <p>Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.</p>
                <Link
                  className="link"
                  to={'#'}>
                  See More
                </Link>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs="1" md="1"></Col>
          <Col xs="3" md="3">
            <h1>Consulting,</h1><br></br><h2>Learning, & Doing</h2>
            <Link
              className="link"
              to={'#'}>
              See More
            </Link>
            <h6>PROUD PARTNERS OF <img /><img /></h6>

          </Col>
          <Col xs="1" md="1"></Col>
          <Col xs="6" md="6">
            <Row>
              <Col xs="2" md="2">
                <img src="" />
                <h4>Workshops</h4>
              </Col>
              <Col xs="10" md="10">
                <p>Join top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.</p>
              </Col>
              </Row>
              <Row>
                <Col xs="2" md="2">
                  <img src="" />
                  <h4>Bootcamps</h4>
                </Col>
                <Col xs="10" md="10">
                  <p>This two week bootcamp is built for product teams of 5-7 people. The bootcamp will be customized and centered around solving a real challenge your product is facing.</p>
                </Col>
                </Row>
                <Row>
                  <Col xs="2" md="2">
                    <img src="" />
                    <h4>Special Ops</h4>
                  </Col>
                  <Col xs="10" md="10">
                    <p>Our teams will work side by side running Design Sprints and building products that endure.</p>
                  </Col>
                  </Row>
            </Col>
          <Col xs="1" md="1"></Col>
        </Row>

        <Row>
          <Col xs="12" md="9"></Col>
          <Col xs="12" md="2"><h1>Upcoming</h1><br></br><h2>Workshops</h2></Col>
          <Col xs="12" md="1"></Col>
        </Row>
        <Row>
          <Col xs="12" md="1"></Col>
          <Col xs="12" md="5">
          </Col>
          <Col xs="12" md="5">
          </Col>
          <Col xs="12" md="1"></Col>
        </Row>

        <Row>
          <Col xs="12" md="1"></Col>
          <Col xs="12" md="2"><h1>Blog/</h1><br></br><h2>Press</h2></Col>
          <Col xs="12" md="9"></Col>
        </Row>
        <Row>
          <Col xs="12" md="1"></Col>
          <Col xs="12" md="3">
          </Col>
          <Col xs="12" md="3">
          </Col>
          <Col xs="12" md="3">
          </Col>
          <Col xs="12" md="2">
            <Link
              className="link"
              to="#">
              See More
            </Link>
          </Col>
        </Row>

      </Container>
  </div>
)
