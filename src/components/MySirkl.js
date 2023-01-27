import './MySirkl.css';
import { useSelector } from 'react-redux';

import { Mysirkl_Favorite, Mysirkl_Info } from './Datas';
const MySirkl = () => {
  const mode = useSelector(state => state.supply.value);

  return (
    <div className='mysirkl' style={mode ? { "--mysirkl-title": "var(--mysirkl-title-dm)", "--mysirkl-scroll": "var(--mysirkl-scroll-dm)" }
      : {"--mysirkl-title": "var(--mysirkl-title-lm)", "--mysirkl-scroll": "var(--mysirkl-scroll-lm)"}}>
      <div className='mysirkl__title'>
        <p className='mysirkl__title__left'>MY SIRKL</p>
        <p className='mysirkl__title__right'>+</p>
      </div>
      <div className='mysirkl__favorite'>
        <Mysirkl_Favorite />
        <Mysirkl_Favorite />
        <Mysirkl_Favorite />
      </div>
      <div className='mysirkl__cross'>
        <p className='mysirkl__cross__title'>A</p>
        <div className='mysirkl__cross__main' />
      </div>
      <div className='mysirkl__data'>
        <Mysirkl_Info />
        <Mysirkl_Info />
        <Mysirkl_Info />
        <Mysirkl_Info />
      </div>

      <div className='mysirkl__cross'>
        <p className='mysirkl__cross__title'>B</p>
        <div className='mysirkl__cross__main' />
      </div>

      <div className='mysirkl__data'>
        <Mysirkl_Info />
        <Mysirkl_Info />
        <Mysirkl_Info />
        <Mysirkl_Info />
      </div>
    </div>
  )
}

export default MySirkl;