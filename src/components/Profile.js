import './Profile.css';
import profilelogo from '../assets/images/profile_1.png';
import righticon from '../assets/images/right.png';
import threeicon from '../assets/images/three.png';
import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';
import nft4 from '../assets/images/nft_4.png';
import nft5 from '../assets/images/nft_5.png';
import nft6 from '../assets/images/nft_6.png';
import nft7 from '../assets/images/nft_7.png';
import upicon from '../assets/images/up.png';
import downicon from '../assets/images/down.png';
import dotimg from '../assets/images/dot.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);


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
    <div className='profile'>
      <div className='profile__container__left'>
        <div className='container__left'>
          <img src={profilelogo} className='container__image' />
          <p className='container__wallet'>Wallet: x0hjd4Hjn...</p>
          <p className='container__name'>Samantha Parker</p>
          <p className='container__explain'>Lorem Ipsum is simply dummy text the printing and typesetting industry. Ipsum has been the industry's standard</p>
          <div className='container__info'>
            <div className='container__button'>
              <Link to="/main/profile/mycircle">My Circle</Link>
              <img src={righticon} className='right__image' />
            </div>
            <div className='container__button'>
              <Link to="/main/profile/contactus">Contact Us</Link>
              <img src={righticon} className='right__image' />
            </div>
            <div className='container__button'>
              <Link to="/main/profile/editprofile">Edit Profile</Link>
              <img src={righticon} className='right__image' />
            </div>
            <div className='container__button'>
              <Link to="/">Logout</Link>
              <img src={righticon} className='right__image' />
            </div>
         </div>
        </div>
      </div>
      <div className='profile__container__right'>
        <div className='container__right__title'>
          <p className='right__title__one'>My Collectibles</p>
          <img src={threeicon} className="right__title__two" onClick={() => setvisible5()} />
          {
            visible5 ? (<div className='right__title__modal'>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/mycircle" className='modal__contain__text'>My Circle</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/contactus" className='modal__contain__text'>Contact Us</Link>
              </div>
              <div className='title__modal__contain'>
                <img src={dotimg} className="modal__contain__img" />
                <Link to="/main/profile/editprofile" className='modal__contain__text'>Edit profile</Link>
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
                <img src={visible1 ? downicon : upicon} className="detail__icon" />
              </div>
            </div>
            {
              visible1 ? (<div className='right__detail__down'>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft6} className="detail__down__pic" />
              </div>):(<div></div>)
            }
          </div>
          <div className='right__detail' onClick={() => setvisible2()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft2} className="detail__pic" />
                <p className="detail__text">CryptoPunks</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">3 Availble</p>
                <img src={visible2 ? downicon : upicon} className="detail__icon" />
              </div>
            </div>
            {
              visible2 ? (<div className='right__detail__down'>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft6} className="detail__down__pic" />
                <img src={nft7} className="detail__down__pic" />
              </div>):(<div></div>)
            }
          </div>
          <div className='right__detail' onClick={() => setvisible3()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft3} className="detail__pic" />
                <p className="detail__text">Bored Ape Yacht Club</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">2 Availble</p>
                <img src={visible3 ? downicon : upicon} className="detail__icon" />
              </div>
            </div>
            {
              visible3 ? (<div className='right__detail__down'>
                <img src={nft5} className="detail__down__pic" />
                <img src={nft6} className="detail__down__pic" />
              </div>):(<div></div>)
            }
          </div>
          <div className='right__detail' onClick={() => setvisible4()}>
            <div className='right__detail__up'>
              <div className='detail__left'>
                <img src={nft4} className="detail__pic" />
                <p className="detail__text">8x9Fx224</p>
              </div>
              <div className='detail__right'>
                <p className="detail__available">2 Availble</p>
                <img src={visible4 ? downicon : upicon} className="detail__icon" />
              </div>
            </div>
            {
              visible4 ? (<div className='right__detail__down'>
                <img src={nft6} className="detail__down__pic" />
              </div>):(<div></div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;