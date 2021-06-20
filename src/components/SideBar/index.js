import { Container, Row, Col } from 'react-bootstrap';

import Button           from '../../fragments/Button';
import CardSideBar      from '../../fragments/CardSideBar';
import FinishedTalkCard from '../../fragments/FinishedTalkCard';
import AcordiumSideBar  from '../../fragments/AcordiumSideBar';

import LastTalks from '../LastTalks';
import DashBoard from '../DashBoard';
import Navbar    from '../Navbar';
import Drawer    from '../Drawer';

import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Link } from 'react-router-dom';

import './styles.scss';

const SideBar = () => (
  <Container fluid>
      <Navbar />
      <Row>
        <Col sm={12} lg={2}>
          <div className="container__sidebar">
            <div>
              <span className="container__sidebar--button">
                <Button
                text="Iniciar Conversa (3/10)"
                icon={<HiOutlinePencilAlt size={24} />}
                />
              </span>
            </div>
            <div className="container__sidebar--card">
              <AcordiumSideBar />
            </div>
          </div>
        </Col>
        <Col sm={12} lg={9}>
          <DashBoard />
          <LastTalks />
        </Col>
        <Col sm={12} lg={1}>
          <Drawer />
        </Col>
      </Row>
    </Container>
);

export default SideBar;