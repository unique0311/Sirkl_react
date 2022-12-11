import './Call.css';

import threeicon from '../assets/images/three.png';
import { Call_Incoming, Call_Outgoing, Call_Missed } from './Datas';

const Call = () => {
  return (
    <div className='call'>
      <div className='call__title'>
        <p className='call__title__left'>Calls</p>
        <img src={threeicon} className="call__title__right" />
      </div>
      <div className='call__data'>
        <Call_Incoming />
        <Call_Outgoing />
        <Call_Outgoing />
        <Call_Incoming />
        <Call_Outgoing />
        <Call_Missed />
        <Call_Outgoing />
        <Call_Outgoing />
        <Call_Outgoing />
        <Call_Incoming />
        <Call_Missed />
        <Call_Outgoing />
        <Call_Missed />
        <Call_Missed />
        <Call_Incoming />
      </div>
    </div>
  )
}

export default Call;