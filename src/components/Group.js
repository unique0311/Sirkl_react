import './Group.css';
import threeicon from '../assets/images/three.png';

import { useState } from 'react';
import { Group_1, Group_2 } from './Datas';

const Group = () => {
  const [showprofile, setShowprofile] = useState(false);

  const otherprofile = () => {
    setShowprofile(!showprofile);
  }

  return (
    <div className='group'>
      <div className='group__title'>
        <p className='group__title__left'>Groups</p>
        <img src={threeicon} className="group__title__right" />
      </div>
      <div className='group__data'>
        <Group_1 />
        <Group_1 />
        <Group_2 />
        <Group_2 />
        <Group_1 />
        <Group_1 />
        <Group_1 />
        <Group_2 />
        <Group_2 />
        <Group_1 />
        <Group_1 />
        <Group_2 />
        <Group_1 />
        <Group_2 />
      </div>
    </div>
  )
}

export default Group;