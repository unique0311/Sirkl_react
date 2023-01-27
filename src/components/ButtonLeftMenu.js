import './ButtonLeftMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import composeVector from '../assets/images/compose_vector.png';
import inbox from '../assets/images/inbox.png';
import inboxdark from '../assets/images/inboxdark.png';
import group from '../assets/images/group.png';
import groupdark from '../assets/images/groupdark.png';
import logo from '../assets/images/logo.png';
import call from '../assets/images/call.png';
import calldark from '../assets/images/calldark.png';

import { useSelector } from 'react-redux';


const ButtonLeftMenu = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const mode = useSelector(state => state.supply.value); 

  return (
    <div className='buttonleft__menu' style = {mode ? {"--button-text": "var(--button-text-dm)", "--button-bg": "var(--button-bg-dm)"} : {"--button-text": "var(--button-text-lm)", "--button-bg": "var(--button-bg-lm)"}}>
      <Link to="/main/compose" onClick={()=>setCurrentPage('compose')} className={`compose__button__menu`}>
        <img src={composeVector} className="compose__vector__menu"/>
        <p className='compose__display__menu'>Compose</p>
      </Link>
      <Link to="/main/inbox" onClick={()=>setCurrentPage('inbox')} className={`inbox__button__menu  ${currentPage==='inbox'?'active':''}`}>
        <img src={mode ? inboxdark : inbox} className="inbox__vector__menu"/>
        <p className='compose__display__menu'>Inbox</p>
        <p className='button__badge__menu'>92</p>
      </Link>
      <Link to="/main/group" onClick={()=>setCurrentPage('group')} className={`group__call__button__menu  ${currentPage==='group'?'active':''}`}>
        <img src={mode ? groupdark : group} className="group__call__vector__menu"/>
        <p className='compose__display__menu'>Groups</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
      <Link to="/main/call" onClick={()=>setCurrentPage('call')} className={`group__call__button__menu   ${currentPage==='call'?'active':''}`}>
        <img src={mode ? calldark : call} className="group__call__vector__menu"/>
        <p className='compose__display__menu'>Calls</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
      <Link to="/main/mySirkl" onClick={()=>setCurrentPage('mySirkl')} className={`group__call__button__menu   ${currentPage==='mySirkl'?'active':''}`}>
        <img src={logo} className="logo__vector__menu"/>
        <p className='compose__display__menu'>My Sirkl</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
    </div>
  )
}

export default ButtonLeftMenu;