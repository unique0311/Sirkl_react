import './Compose.css';
import { Link } from 'react-router-dom';

import backimg from '../assets/images/back.png';
import backdarkimg from '../assets/images/backdark.png';
import recycleimg from '../assets/images/recycle.png';
import attachimg from '../assets/images/attach.png';
import galleryimg from '../assets/images/gallery.png';
import plusimg from '../assets/images/plus.png';
import smileimg from '../assets/images/smile.png';
import threeimg from '../assets/images/three.png';
import threedarkimg from '../assets/images/threedark.png';
import divideimg from '../assets/images/divide.png';
import { useSelector } from 'react-redux'; 

const Compose = () => {
  const mode = useSelector(state => state.supply.value);

  return (
    <div className='compose' style={mode ? {
      "--compose-text": "var(--compose-text-dm)", "--compose-bg": "var(--compose-bg-dm)", "--compose-input-color" : "var(--compose-input-color-dm)"
    }
      : { "--compose-text": "var(--compose-text-lm)", "--compose-bg": "var(--compose-bg-lm)", "--compose-input-color": "var(--compose-input-color-lm" }}>
      <div className='compose__title'>
        <div className='compose__title__left'>
          <Link to="/main/inbox" >
            <img src={mode ? backdarkimg: backimg} className="backimg__setting" />
          </Link>
          <p className='compose__left__text'>New Message</p>
        </div>
        <div className='compose__title__right'>
          <img src={recycleimg} className="recycleimg__setting" />
          <img src={mode ? threedarkimg: threeimg} className="threeimg__setting" />
        </div>
      </div>
      <div className='compose__sendto'>
        <p className='compose__sendto__text'>SEND TO</p>
        <div className='compose__sendto__search'>
          <input type="text" className='compose__sendto__input' placeholder='Paste a wallet address or add a contact from your SIRKL' />
        </div>
        <div className='compose__sendto__select'>
          <div className='compose__sendto__one'>
            <p className='compose__one__text'>Garvee</p>
            <img src={divideimg} className="divideimg__setting" />
          </div>

          <div className='compose__sendto__one'>
            <p className='compose__one__text'>Garvee</p>
            <img src={divideimg} className="divideimg__setting" />
          </div>

          <div className='compose__sendto__one'>
            <p className='compose__one__text'>Garvee</p>
            <img src={divideimg} className="divideimg__setting" />
          </div>
        </div>
        <textarea className='compose__sendto__sentence' placeholder="Hello,&#10;Write here..." />
      </div>
      <div className='compose__bottom'>
        <div className='compose__bottom__button'>Send</div>
        <div className='compose__botton__attachfile'>
          <img src={plusimg} className="plusimgs__setting" />
          <img src={attachimg} className="attachimg__setting" />
          <img src={galleryimg} className="galleryimg__setting" />
          <img src={smileimg} className="smileimg__settings" />
        </div>
      </div>
    </div>
  )
}

export default Compose;