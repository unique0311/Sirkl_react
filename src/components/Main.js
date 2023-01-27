import './Main.css';
import imagelogo from '../assets/images/logo.png';
import dropdownicon from '../assets/images/dropdown.png';
import dropdowndarkicon from '../assets/images/dropdowndark.png';
import alarmicon from '../assets/images/alarm.png';
import alarmdarkicon from '../assets/images/alarmdark.png';
import extraicon from '../assets/images/extra.png';
import extradarkicon from '../assets/images/extradark.png';
import profilelogo from '../assets/images/profile_1.png';
import dropdown1darkicon from '../assets/images/dropdown_1dark.png';
import dropdown1icon from '../assets/images/dropdown_1.png';
import stateicon from '../assets/images/state.png';
import ButtonLeft from './ButtonLeft';
import ButtonLeftMenu from './ButtonLeftMenu'
import dotimg from '../assets/images/dot.png';
import logo from '../assets/images/logo.svg';
import online from '../assets/images/online.svg';
import shinning1 from '../assets/images/Ellipse6_1.svg';

import { Outlet, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../supplyslice';
import { useState } from 'react';


// const mode = 1;

const Main = () => {
  const [visible5, setVisible5] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);

  const setsidetoggle = () => {
    setSideToggle(!sideToggle);
  }

  const dispatch = useDispatch()
  const mode = useSelector(state => state.supply.value)
  // if (setVisible5)
  //   window.addEventListener("click", () => {
  //    setVisible5(false)
  // })
  return (
    <div className='main' style={mode ? { "--bg-main": "var(--bg-main-dm)", "--main-search": "var(--main-search-dm)", "--main-text": "var(--main-text-dm)", "--main-status-text": "var(--main-status-text-dm)", "--detail-main-bg": "var(--detail-main-bg-dm)" } :
      { "--bg-main": "var(--bg-main-lm)", "--main-search": "var(--main-search-lm)", "--main-text": "var(--main-text-lm)", "--main-status-text": "var(--main-status-text-lm)", "--detail-main-bg": "var(--detail-main-bg-lm)" }} >
      {/* <img src={shinning1} className="shinning__position" />  */}
      <div className='main__left__container'>
        <div className='left__container__logo'>
          <img src={imagelogo} className="container__logo__set" />
          <img src={logo} className='container__logo__text' />
        </div>
        <div className='left__container__buttons'>
          <ButtonLeft />
        </div>
      </div>
      <div className='main__right__container'>
        <div className='right__container__top'>
          <div className='container__top__search__left'>
            <div className='hamburger__menu' onClick={() => setsidetoggle()}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='container__top__search'>
              <input type="text" placeholder="Seacrch here" className='search__input' />
              <img src={mode ? dropdowndarkicon : dropdownicon} className="dropdownicon__setting"/>
            </div>
          </div>
          <div className='container__top__right'>
            <div className='container__top__active'>
              <img src={stateicon}  className="stateicon__setting"/>
              <p className='top__active__text'>Active</p>
              <img src={mode ? dropdown1darkicon : dropdown1icon} className="dropdown1icon__setting" />
            </div>
            <Link to="/main/notification"><img src={mode ? alarmdarkicon : alarmicon} className="top__button showdisplay" /></Link>
            <img src={mode ? extradarkicon : extraicon} className="top__button showdisplay" />
            <div className='container__top__status'>
              <p className='top__status__address'>8x9Fx224</p>
              <div className='top__status__state__img' >
                <img src={online} className='top__status__state' />
              </div>
            </div>
            <img src={profilelogo} className='container__top__profile' onClick={() => { setVisible5(true); }} />
            {/* popup */}
            <div className={visible5 ? "modal display-block" : "modal display-none"}>
              <div className='modal-back' onClick={()=>setVisible5(false)} />
              <div className='right__title__modal__main' >
                <div className='title__modal__contain'>
                  <img src={dotimg} className="modal__contain__img" />
                  <Link to="/main" onClick={() => setVisible5(false)} className='modal__contain__text'>Profile</Link>
                </div>
                <div className='title__modal__contain'>
                  <img src={dotimg} className="modal__contain__img" />
                  <Link to="/main/profile/contactus" className='modal__contain__text'>Contact Us</Link>
                </div>
                <div className='title__modal__contain'>
                  <img src={dotimg} className="modal__contain__img" />
                  <div onClick={() => { dispatch(setMode(!mode)); setVisible5(false); }} className='modal__contain__text'>
                    {!mode? "Dark Mode" : "Light Mode"}
                  </div>
                </div>
                <div className='title__modal__contain'>
                  <img src={dotimg} className="modal__contain__img" />
                  <Link to="/settings" className='modal__contain__text'>Settings</Link>
                </div>
                <div className='title__modal__contain'>
                  <img src={dotimg} className="modal__contain__img" />
                  <Link to="/" className='modal__contain__text'>Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right__container__detail'>
          <div className='container__datail__rest' />
          <div className='container__detail__main'>
            <div className='detail__main_one'>
              <Outlet />
            </div>
          </div>
          <div className='container__datail__rest' />
        </div>
      </div>

      <div className={`backdrop ${!sideToggle? "showmenu": "hiddenmenu"}`} onClick = {() => setsidetoggle(false)}></div>
      <div className={`sidedrawer ${sideToggle ? "showmenu" : "hiddenmenu"}`} onClick = {() => setsidetoggle(false)}>
        <div className='main__left__container__menu'>
          <div className='left__container__logo__menu'>
            <img src={imagelogo} className="container__logo__set__menu" />
            <img src={logo} className='container__logo__text__menu' />
          </div>
          <div className='left__container__buttons__menu'>
            <ButtonLeftMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;