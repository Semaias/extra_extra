import './styles.scss';

const Card = ( {name, date, hour} ) => (
  <div className="container__fcard">
    <div className="container__fcard--content">
      <div className="container__fcard--img" >
      </div>
      <p className="container__fcard--text">
        { name } 
        <br />
        <small className="container__fcard--datetime">
          { date } - { hour }
        </small>
      </p>
    </div>
  </div>
);

export default Card;