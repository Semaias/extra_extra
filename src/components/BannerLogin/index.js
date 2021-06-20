import { Container, Row, Col } from 'react-bootstrap';

import './styles.scss';

const BannerLogin = () => (
  <div className="container__banner">
    <div className="container__banner--banner">
      <h1 className="container__banner--h1">
        Comunique-se com
        <br />
        seu cliente onde ele
        <br />
        estiver.
      </h1>
    </div>
  </div>
);

export default BannerLogin;