import './Login.css';
import logoimg_1 from '../assets/images/main_2.png';
import logoimg_2 from '../assets/images/main_3.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Login = () => {
  const mode = useSelector(state => state.supply.value)

  return (
    <div className='login' style={mode ? {"--bg-1":"var(--bg-1-dm)", "--title": "var(--title-dm)", "--subtitle": "var(--subtitle-dm)"}:{"--bg-1":"var(--bg-1-lm)", "--title": "var(--title-lm)","--subtitle": "var(--subtitle-lm)"}}>
      <div className='login__title login__title_mask'>
        <div className='login__title__container'>
          <div className='login__logo'>
            <img src={logoimg_1} className="logo__login__img" />
            <p className='logo__text'>SIRKL</p>
          </div>
        </div>
      </div>
      <div className='login__info' >
        <div className='login__info__container'>
          <div className='info__logo'>
            <img src={logoimg_2} className="info__logo__img"/>
          </div>
          <h2 className='lnfo__information__one'>Connect Your Wallet</h2>
          <p className='info__information__two'>Talk with other wallets and your NFT groups</p>
          <Link to = {"/main"} className="info__button">GET STARTED</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;