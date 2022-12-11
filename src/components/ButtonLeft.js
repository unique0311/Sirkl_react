import './ButtonLeft.css';
import { Link } from 'react-router-dom';
import composeVector from '../assets/images/compose_vector.png';
import inbox from '../assets/images/inbox.png';
import group from '../assets/images/group.png';
import logo from '../assets/images/logo.png';
import call from '../assets/images/call.png';


const ButtonLeft = () => {
  return (
    <div className='buttonleft'>
      <Link to="/main/compose" className='compose__button'>
        <img src={composeVector} className="compose__vector"/>
        <p className='compose__display'>Compose</p>
      </Link>
      <Link to="/main/inbox" className='inbox__button'>
        <img src={inbox} className="inbox__vector"/>
        <p className='compose__display'>Inbox</p>
        <p className='button__badge'>92</p>
      </Link>
      <Link to="/main/group" className='group__call__button'>
        <img src={group} className="group__call__vector"/>
        <p className='compose__display'>Groups</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
      <Link to="/main/call" className='group__call__button'>
        <img src={call} className="group__call__vector"/>
        <p className='compose__display'>Calls</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
      <Link to="/main/mySirkl" className='group__call__button'>
        <img src={logo} className="logo__vector"/>
        <p className='compose__display'>My Sirkl</p>
        {/* <p className='button__badge'>92</p> */}
      </Link>
    </div>
  )
}

export default ButtonLeft;