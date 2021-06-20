import { Container, Row, Col } from 'react-bootstrap';

import FinishedTalkCard from '../../fragments/FinishedTalkCard';

import './styles.scss';

const LastTalks = () => (
  <Col sm={12} lg={12} >
    <div className="container__LastTalks">
      <div className="container__LastTalks--title">
        <h2 className="container__LastTalks--h2"> Últimas conversas enerradas </h2>
      </div>
      <Col sm={12} lg={11}>
        <div className="container__LastTalks--card">
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>        
        </div>
        <div className="container__LastTalks--card">
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>        
        </div>
        <div className="container__LastTalks--card">
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>
          <Col sm={12} lg={3}>
            <FinishedTalkCard 
              name="Marciano Henrique Silva"
              date="22/02/2001"
              hour="16:30"
            />
          </Col>        
        </div>
      </Col>
    </div>
  </Col>
);

export default LastTalks;