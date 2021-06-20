import './styles.scss';

const Button = ({ text, icon, color }) => (
  <button type="button" className="button" style={{ borderColor: color, color }}>
    {text} {icon}
  </button>
);

export default Button;