import './styles.scss';

const Card = ( {icon, text} ) => (
  <div className="container__card">
    <div className="container__card--content">
      {icon}
      {text}
    </div>
  </div>
);

export default Card;