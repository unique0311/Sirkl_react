import './Profile.css';
import profilelogo from '../assets/images/profile_1.png';
import righticon from '../assets/images/right.png';
import threeicon from '../assets/images/three.png';
import threedarkicon from '../assets/images/threedark.png';
import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';
import nft4 from '../assets/images/nft_4.png';
import nft5 from '../assets/images/nft_5.png';
import nft6 from '../assets/images/nft_6.png';
import nft7 from '../assets/images/nft_7.png';
import updarkicon from '../assets/images/updark.png';
import upicon from '../assets/images/up.png';
import downdarkicon from '../assets/images/downdark.png';
import downicon from '../assets/images/down.png';
import dotimg from '../assets/images/dot.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const mode = useSelector(state => state.supply.value);

  const [showprofile, setShowprofile] = useState(false);

  const otherprofile = () => {
    setShowprofile(!showprofile);
  }

  const setvisible1 = () => {
    setVisible1(!visible1)
  }

  const setvisible2 = () => {
    setVisible2(!visible2)
  }

  const setvisible3 = () => {
    setVisible3(!visible3)
  }
  
  const setvisible4 = () => {
    setVisible4(!visible4)
  }

  const setvisible5 = () => {
    setVisible5(!visible5)
  }

  return (
    <div className='profile' style={mode ? {"--profile-text": "var(--profile-text-dm)", "--profile-subtext": "var(--profile-subtext-dm)", "--modal-bg": "--modal-bg-dm"} : {"--profile-text": "var(--profile-text-lm)", "--profile-subtext": "var(--profile-subtext-lm)", "--modal-bg": "--modal-bg-lm"}}>
      <div className='profile__container__left'>
        <div className='container__left'>
          <img src={nft6} className='container__image' onClick={otherprofile}/>
          <p className='container__wallet'>Wallet: x0hjd4Hjn...</p>
          <p className='container__name'>Anthony Park</p>
          <p className='container__explain__otherprofile'>Lorem Ipsum is simply dummy text the printing and typesetting industry. Ipsum has been the industry's standard</p>
          <div className='container__info'>
            <div className='container__button'>
              <Link to="/main/profile/savemycircle">Save in my Circle</Link>
              <img src={righticon} className='right__image' />
            </div>
            <div className='container__button'>
              <Link to="/main/profile/sendamessage">Send a Message</Link>
              <img src={righticon} className='right__image' />
            </div>
            
         </div>
        </div>
      </div>
      <div className='profile__container__right'>
        <div className='container__right__title'>
          <p className='right__title__one'>Anthony's Collectibles</p>
          <img src={mode ? threedarkicon: threeicon} className="right__title__two" onClick={() => setvisible5()} />
          {
            visible5 ? (<div className='right__title__modal__otherprofile'>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/mycircle" className='modal__contain__text'>My Circle</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/savemycircle" className='modal__contain__text'>Save in my Circle</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/sendamessage" className='modal__contain__text'>Send a Message</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/contactus" className='modal__contain__text'>Contact Us</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/" className='modal__contain__text'>Logout</Link>
              </div>
            </div>) : ("")
          }
        </div>
        <div className='container__right__detail'>
          <div className='right__detail' onClick={() => setvisible1()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft1} className="detail__pic" />
                <p className="detail__text">Bored Ape Yacht Club</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">2 Availble</p>
                <img src={mode ? updarkicon : upicon} className={`detail__icon ${ visible1 ? "rotate__icon" : "rerotate__icon"}`} />
              </div>
            </div>
            <div className={`right__detail__down ${ visible1 ? 'show' : 'hidden'}`}>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft6} className="detail__down__pic" />
            </div>
          </div>
          <div className='right__detail' onClick={() => setvisible2()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft2} className="detail__pic" />
                <p className="detail__text">CryptoPunks</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">3 Availble</p>
                <img src={mode ? updarkicon : upicon} className={`detail__icon ${ visible2 ? "rotate__icon" : "rerotate__icon"}`} />
              </div>
            </div>
            <div className={`right__detail__down ${ visible2 ? 'show' : 'hidden'}`}>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft6} className="detail__down__pic" />
                <img src={nft7} className="detail__down__pic" />
            </div>
          </div>
          <div className='right__detail' onClick={() => setvisible3()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft3} className="detail__pic" />
                <p className="detail__text">Bored Ape Yacht Club</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">2 Availble</p>
                <img src={mode ? updarkicon : upicon} className={`detail__icon ${ visible3 ? "rotate__icon" : "rerotate__icon"}`} />
              </div>
            </div>
            <div className={`right__detail__down ${ visible3 ? 'show' : 'hidden'}`}>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft7} className="detail__down__pic" />
            </div>
          </div>
          <div className='right__detail' onClick={() => setvisible4()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft4} className="detail__pic" />
                <p className="detail__text">8x9Fx224</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">2 Availble</p>
                <img src={mode ? updarkicon : upicon} className={`detail__icon ${ visible4 ? "rotate__icon" : "rerotate__icon"}`} />
              </div>
            </div>
            <div className={`right__detail__down ${ visible4 ? 'show' : 'hidden'}`}>
                <img src={nft6} className="detail__down__pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;