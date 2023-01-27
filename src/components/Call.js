import './Call.css';

import threeicon from '../assets/images/three.png';
import threedarkicon from '../assets/images/threedark.png';
import { useSelector } from 'react-redux';
import { Call_Incoming, Call_Outgoing, Call_Missed } from './Datas';



const Call = () => {
  const mode = useSelector(state => state.supply.value);

  return (
    <div className='call' style={
      mode ? { "--call-title": "var(--call-title-dm)", "--call-scroll": "var(--call-scroll-dm)" }
        : { "--call-title": "var(--call-title-lm)", "--call-scroll": "var(--call-scroll-lm)" }}>
      <div className='call__title'>
        <p className='call__title__left'>Calls</p>
        <img src={mode? threedarkicon: threeicon} className="call__title__right" />
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