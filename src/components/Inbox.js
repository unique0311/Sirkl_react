import './Inbox.css';
import { useState } from 'react';
import threeicon from '../assets/images/three.png';
import downicon from '../assets/images/down.png';

import nft1 from '../assets/images/nft_1.png';
import nft5 from '../assets/images/nft_5.png';
import plusimg from '../assets/images/plus.png';
import smileimg from '../assets/images/smile.png';
import mikeimg from '../assets/images/mike.png';
import sendimg from '../assets/images/send.png';

import { Inbox_1, Inbox_2 } from './Datas';

import {RecieveMessage, SendMessage, CrossTime} from './MessageDetail';

const Inbox = () => {
  const [dialogview, setDialogview] = useState(false);

  const messageDialog = () => {
    setDialogview(!dialogview);
  }

  return (
    <div className='inbox'>
      {
        !dialogview ? (
          <div className='inbox__main__one'>
            <div className='inbox__title'>
              <div className='inbox__title__left'>
                <input type="checkbox" className="inbox__left__checkbox" />
                <img src={downicon} className="inbox__left__pic" />
                <p className='inbox__left__text'>Inbox</p>
              </div>
              <div className='inbox__title__medium'>
                <div className='inbox__medium__friend'>Friends</div>
                <div className='inbox__medium__others'>Others</div>
              </div>
              <img src={threeicon} className="inbox__title__right" />
            </div>
            <div className='inbox__data'>
              {/* One block::start */}
              <Inbox_1 onClick={messageDialog}/>
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              <Inbox_1 onClick={messageDialog} />
              {/* ::End */}
            </div>
          </div>
        ) : (
            <div className='inbox__main__other'>
              <div className='inbox__main__two'>
                <div className='inbox__title'>
                  <div className='inbox__title__left'>
                    <input type="checkbox" className="inbox__left__checkbox" />
                    <img src={downicon} className="inbox__left__pic" />
                    <p className='inbox__left__text'>Inbox</p>
                  </div>
                  <div className='inbox__title__medium__two'>
                    <div className='inbox__medium__friend'>Friends</div>
                    <div className='inbox__medium__others'>Others</div>
                  </div>
                  <img src={threeicon} className="inbox__title__right" />
                </div>
                <div className='inbox__data'>
                  {/* One block::start */}
                  <Inbox_2 onClick={messageDialog}/>
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  <Inbox_2 onClick={messageDialog} />
                  {/* ::End */}
                </div>
              </div>
              <div className='inbox__message__dialog'>
                <div className='message__dialog__header'>
                  <div className='dialog__header__left'>
                    <img src={nft5} className="dialog__header__pic" onClick={messageDialog}/>
                    <div className='dialog__header__text' >
                      <p className='dialog__header__text1'>8x9Fx224</p>
                      <p className="dialog__header__text2">Online</p>
                    </div>
                  </div>
                  <img src={threeicon} className="dialog__header__three" />
                </div>
                <div className='message__dialog__main'>
                  <div className='message__dialog__hmain'>
                    <RecieveMessage />
                    <CrossTime />
                    <SendMessage />
                    <RecieveMessage />
                    <RecieveMessage />
                    <CrossTime />
                    <SendMessage />
                    <RecieveMessage />

                  </div>
                </div>
                <div className='dialog__bottom'>
                  <div className='message__dialog__bottom'>
                    <div className='dialog__bottom__input'>
                      <input type="text" placeholder="Write here..." className="dialog__input__info" />
                      <div className='bottomimg__setting'>
                        <img src={plusimg} className="plusimg__setting" />
                        <img src={smileimg} className="smileimg__setting" />
                        <img src={mikeimg} className="mikeimg__setting" />
                      </div>
                    </div>
                    <div className='dialog__bottom__button'>
                      <img src={sendimg} className="sendimg__setting" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
      }
      
    </div>
  )
}

export default Inbox;