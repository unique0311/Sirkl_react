import './Group.css';
import threeicon from '../assets/images/three.png';
import threedarkicon from '../assets/images/threedark.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Group_1, Group_2 } from './Datas';
import Profile from "./OtherProfile";

const Group = () => {
  const [showprofile, setShowprofile] = useState(false);

  const otherprofile = () => {
    setShowprofile(!showprofile);
  }

  const mode = useSelector(state => state.supply.value); 
  return (
    <div style={{"height": "100%"}}>
      {!showprofile ?
        (<div className='group' style={mode ? { "--group-title-text": "var(--group-title-text-dm)", "--group-scroll-bg": "var(--group-scroll-bg-dm)" } : { "--group-title-text": "var(--group-title-text-lm)", "--group-scroll-bg": "var(--group-scroll-bg-lm)" }}>
          <div className='group__title'>
            <p className='group__title__left'>Groups</p>
            <img src={mode ? threedarkicon : threeicon} className="group__title__right" />
          </div>
          <div className='group__data'>
            <Group_1 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
            <Group_1 onClick={otherprofile} />
            <Group_2 onClick={otherprofile} />
          </div>
        </div>) :
        (
          <Profile />
        )
      }
    </div>
  )
}

export default Group;