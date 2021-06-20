import { Container, Row, Col } from 'react-bootstrap';  

import ProfileNavbar from '../../fragments/ProfileNavbar';

import './styles.scss';

const Navbar = () => (
  <Container fluid>
      <Row>
        <div className="container__navbar">
          <Col sm={12} lg={2}>
            <div className="container__navbar--title">
              <h2 className="container__navbar--h2">
                Virtual Fácil
              </h2>
            </div>
          </Col>
          <Col sm={12} lg={8}>
          </Col>
          <Col sm={12} lg={2}>
            <div className="container__navbar--profile">
              <ProfileNavbar />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
);

export default Navbar;