import './styles.scss';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { RiMailLockLine } from 'react-icons/ri';

const RoundedCard = ( {name} ) => (
  <div className="container__RoundedCard">
    <div className="container__RoundedCard--content">
      <HiOutlineLockClosed size={90} color="#5C3B81" />
    </div>
  </div>
);

export default RoundedCard;