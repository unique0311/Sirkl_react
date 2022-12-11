import './Inbox.css';

import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';
import nft4 from '../assets/images/nft_4.png';
import nft5 from '../assets/images/nft_5.png';
import nft6 from '../assets/images/nft_6.png';
import nft7 from '../assets/images/nft_7.png';
import outgoingicon from '../assets/images/outgoing.png';
import incomingicon from '../assets/images/incoming.png';
import missedicon from '../assets/images/missed.png';
import threeicon from '../assets/images/three.png';
import profile1 from '../assets/images/profile_1.png';
import profile2 from '../assets/images/profile_2.png';
import profile3 from '../assets/images/profile_3.png';
import profile4 from '../assets/images/profile_4.png';
import phoneimg from '../assets/images/phone.png';
import messageimg from '../assets/images/message_small.png';

export const Inbox_1 = ({onClick}) => {
  return (
    <div className='inbox__data__info' onClick={onClick}>
      <div className='inbox__data__infoleft'>
        <input type="checkbox" className="inbox__left__checkbox" />
        <img src={nft2} className="inbox__data__pic" />
        <div className='inboxdata__text'>
          <p className='inbox__data__text1'>8x9Fx224</p>
          <p className='inbox__data__text2'>Find out who is charge of this portion of the process</p>
        </div>
      </div>
      <div className='inbox__data__right'>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Inbox_2 = ({onClick}) => {
  return (
    <div className='inbox__data__info1' onClick={onClick}>
      <div className='inbox__data__infoleft'>
          <input type="checkbox" className="inbox__left__checkbox" />
          <img src={nft3} className="inbox__data__pic" />
          <div className='inbox__text__style'>
            <p className='inbox__data__text11'>8x9Fx224</p>
            <p className='inbox__data__text22'>Find out who is charge of this portion of the process</p>
          </div>
      </div>
      <p className='inbox__data__inforight'>2 mins ago</p>  
    </div>
  )
}

export const Group_1 = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={nft1} className="inbox__data__pic" />
        <p className='inbox__data__text1'>CloneX</p>
        <p className='inbox__data__text2'>Find out who is charge of this portion of the process</p>
      </div>
      <div className='inbox__data__right'>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Group_2 = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={nft4} className="inbox__data__pic" />
        <p className='inbox__data__text1'>Bored Ape Yacht Club</p>
        <p className='inbox__data__text2'>Find out who is charge of this portion of the process</p>
      </div>
      <div className='inbox__data__right'>
        <div className='inbox__data__badge'>
          <p className='badge__format'>02</p>
        </div>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Call_Incoming = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={nft6} className="inbox__data__pic" />
        <p className='inbox__data__text1'>Jenny Welson</p>
        <img src={incomingicon} className="incomingimg__setting" />
        <p className='incoming__text'>Incoming</p>
      </div>
      <div className='inbox__data__right'>
        <div className='inbox__data__badge'>
          <p className='badge__format'>02</p>
        </div>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Call_Outgoing = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={nft5} className="inbox__data__pic" />
        <p className='inbox__data__text1'>Savannah Nguyen</p>
        <img src={outgoingicon} className="incomingimg__setting" />
        <p className='incoming__text'>Outgoing</p>
      </div>
      <div className='inbox__data__right'>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Call_Missed = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={nft7} className="inbox__data__pic" />
        <p className='inbox__data__text1'>Daniel Russell</p>
        <img src={missedicon} className="missedimg__setting" />
        <p className='missed__text'>Missed Call (2)</p>
      </div>
      <div className='inbox__data__right'>
        <p className='inbox__data__inforight'>2 mins ago</p>
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};

export const Mysirkl_Favorite = () => {
  return (
    <div className='favorite__container'>
      <img src={profile2} className="favorite__container__img" />
      <p className='favorite__container__name'>Ronny</p>
    </div>
  )
}

export const Mysirkl_Info = () => {
  return (
    <div className='inbox__data__info'>
      <div className='inbox__data__infoleft'>
        <img src={profile3} className="inbox__data__pic" />
        <p className='inbox__data__text1'>Jenny Wilson</p>
        <p className='inbox__data__text2'>Find out who is charge of this portion of the process</p>
      </div>
      <div className='inbox__data__right'>
        <img src={phoneimg} className='phoneimg__setting' />
        <img src={messageimg} className='messageimg__setting' />
        <img src={threeicon} className="inbox__data__infopic" />
      </div>
    </div>
  )
};
