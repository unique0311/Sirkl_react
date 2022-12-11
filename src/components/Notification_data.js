import './Notification.css';
import { useState } from 'react';
import profilelogo1 from '../assets/images/profile_1.png';
import threeicon from '../assets/images/three.png';
import backicon from '../assets/images/back_red.png';
import oneicon from '../assets/images/one.png';


const Notification_data = () => {
  return (
    <div className='notification__details__pro'>
      <div className='notification__detail__left'>
        <img src={profilelogo1} className="notification__left__pic" />
        <p className='notification__left__text1'>"Grodonger.eth"</p> <p className='notification__left__text2'>added you in his SIRKL</p>
      </div>
      <div className='notification__detail__right'>
        <div className='notification__call__status'>
          <div className='missed__call__state'>
            <img src={backicon} className="back__call__icon" />
            <p className='back__call__text' >Missed call</p>
            <img src={oneicon} className="back__call__course" />
          </div>
          <p className="notification__right__text">2 mins ago</p>
        </div>
        <img src={threeicon} className="notification__right__pic" />
      </div>
    </div>
  )
}

export default Notification_data;