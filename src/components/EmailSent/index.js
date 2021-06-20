import { Container, Row, Col } from 'react-bootstrap';

import Input from '../../fragments/Input';
import Button from '../../fragments/Button';
import RoundedCard from '../../fragments/RoundedCard';

import BannerLogin from '../BannerLogin';

import { Link } from 'react-router-dom';

import './styles.scss';

const EmailSent = () => (
  <div className="container__EmailSent">
    <Container fluid>
      <Row>
        <Col sm={12} lg={6}>
          <BannerLogin />
        </Col>
        <Col sm={12} lg={6}>
          <div className="container__EmailSent--col">
            <div>
              <RoundedCard />
              <h2 className="container__EmailSent--h2">
                Um email foi enviado
                <br />
                com um link para
                <br />
                redefinir sua senha.
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default EmailSent;