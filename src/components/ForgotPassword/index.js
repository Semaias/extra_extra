import { Container, Row, Col } from 'react-bootstrap';

import Input from '../../fragments/Input';
import Button from '../../fragments/Button';
import RoundedCard from '../../fragments/RoundedCard';

import BannerLogin from '../BannerLogin';

import { Link } from 'react-router-dom';

import './styles.scss';

const ForgotPassword = () => (
  <div className="container__ForgotPassword">
    <Container fluid>
      <Row>
        <Col sm={12} lg={6}>
          <BannerLogin />
        </Col>
        <Col sm={12} lg={6}>
          <div className="container__ForgotPassword--col">
            <div>
              <RoundedCard />
              <h2 className="container__ForgotPassword--h2">Esqueci a Senha</h2>
              <p className="container__ForgotPassword--p">
              Não lembra da senha? Informe o e-mail cadastrado
              <br />
              para criar uma nova senha:
              </p>
              <Input type="text" name="Informe seu e-mail"/>
              <div className="container__ForgotPassword--enter">
                <Button text="Entrar"  className="click" />
              </div>
              <div className="container__ForgotPassword--f_password">
                <small> 
                  <Link className="container__ForgotPassword--f_pass_link">
                    Esqueceu sua senha?
                  </Link >
                </small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ForgotPassword;