import './styles.scss';

const Input = ( {type,name, isTextArea = false }) => (
  <div className="inputForm">
    { isTextArea
      ? <textarea type="text" required id="email" rows={4} cols={15} />
      : <input type={type} required id="email" />}
    <label htmlFor="email">{name}</label>
  </div>
);

export default Input;