import { Container, Row, Col } from 'react-bootstrap';

import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { BsGear, BsQuestionCircle } from 'react-icons/bs';

import Card from '../../fragments/Card';

import './styles.scss';

const DashBoard = () => (
  <Col sm={12} lg={12} >
    <div className="container__dashboard">
      <div className="container__dashboard--title">
        <h2 className="container__dashboard--h2"> Olá, laksjnclçksajfn </h2>
      </div>
      <div className="container__dashboard--card">
        <Card icon={<BiMessageAltDetail size={100} />} text="Conversas" />
        <Card icon={<FiUsers size={100} />} text="Contatos" />
        <Card icon={<GoGraph size={100} />} text="Relatórios" />
        <Card icon={<BsGear size={100} />} text="Configurações" />
        <Card icon={<BsQuestionCircle size={100} />} text="Suporte" />
      </div>
    </div>
  </Col>
);

export default DashBoard;