import './MessageDetail.css';

import checkedimg from '../assets/images/checked.png';

export const RecieveMessage = () => {
  return (
    <div className='recieve__message'>
      <div className='recievemessage'>
        <div className='recievemessage__detail'>
          <p className='sending__message__address'>8x9Fx224</p>
          <p className='recieve__message__detail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='recievemessage__date'>Today 2:05 AM</div>
      </div>
    </div>
  )
};

export const SendMessage = () => {
  return (
    <div className='send__message'>
      <div className='sendmessage'>
        <p className='sending__message'>Could you make sure to involve the Head of R&D here?</p>
        <div className='sending__message__state'>
          <p className='sending__message__time'>2:05 AM</p>
          <img src={checkedimg} className="sending__message__Status" />
        </div>
      </div>
    </div>
  )
};

export const CrossTime = () => {
  return (
    <div className='crosstime'>
      <div className='crosstime__left' />
      <p className='crosstime__medium'>25 June</p>
      <div className='crosstime__left' />
    </div>
  )
}


