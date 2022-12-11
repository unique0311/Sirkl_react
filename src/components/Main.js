import './Main.css';
import imagelogo from '../assets/images/logo.png';
import dropdownicon from '../assets/images/dropdown.png';
import alarmicon from '../assets/images/alarm.png';
import alarmdarkicon from '../assets/images/alarmdark.png';
import extraicon from '../assets/images/extra.png';
import extradarkicon from '../assets/images/extradark.png';
import profilelogo from '../assets/images/profile_1.png';
import dropdown1icon from '../assets/images/dropdown_1.png';
import stateicon from '../assets/images/state.png';
import ButtonLeft from './ButtonLeft';
import { Outlet, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../supplyslice';


// const mode = 1;

const Main = () => {

  const dispatch = useDispatch()
  const mode = useSelector(state => state.supply.value)

  return (
    <div className='main' style={mode ? {"--bg-main":"var(--bg-main-dm)", "--main-search": "var(--main-search-dm)", "--main-text": "var(--main-text-dm)"}: {"--bg-main": "var(--bg-main-lm)","--main-search": "var(--main-search-lm)", "--main-text": "var(--main-text-lm)"}} >
      <div className='main__left__container'>
        <div className='left__container__logo'>
          <img src={imagelogo} className="container__logo__set" />
          <p className='container__logo__text'>SIRKL</p>
        </div>
        <div className='left__container__buttons'>
          <ButtonLeft />
        </div>
      </div>
      <div className='main__right__container'>
        <div className='right__container__top'>
          <div className='container__top__search'>
            <input type="text" placeholder="Seacrch here" className='search__input' />
            <img src={dropdownicon} />
          </div>
          <div className='container__top__right'>
            {/* <button onClick={()=>dispatch(setMode(!mode))}>sdsd</button> */}
            <div className='container__top__active'>
            <img src={stateicon}  className="stateicon__setting"/>
              <p className='top__active__text'>Active</p>
            <img src={dropdown1icon} />
            </div>
            <Link to="/main/notification"><img src={mode ? alarmdarkicon : alarmicon} className="top__button" /></Link>
            <img src={mode ? extradarkicon : extraicon} className="top__button showdisplay" />
            <div className='container__top__status'>
              <p className='top__status__address'>8x9Fx224</p>
              <p className='top__status__state'>Online</p>
            </div>
            <img src={profilelogo} className='container__top__profile' />
          </div>
        </div>
        <div className='right__container__detail'>
          <div className='container__detail__main'>
            <div className='detail__main_one'>
              <Outlet />
            </div>
          </div>
          <div className='container__datail__rest' />
        </div>
      </div>
    </div>
  )
}

export default Main;