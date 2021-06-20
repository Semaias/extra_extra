import './styles.scss';

const CardSideBar = ( {name, number}) => (
  <div className="container__CardSideBar">
    <div className="container__CardSideBar--content">
      <p className="container__CardSideBar--content">
        <img src="../../assets/img/banner.png"/>
        {name}
        <small className="container__CardSideBar--circle">
          {number}
        </small>
      </p>
    </div>
  </div>
);

export default CardSideBar;