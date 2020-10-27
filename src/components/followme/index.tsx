import React, { useState } from 'react';
import './index.less';
function Followme() {
  const [ifShowMyContact, changeIfShowMyContact] = useState(false);
  const [contactLogoURL, changeContactLogo] = useState(require('./images/follow.png'));
  const changeLogo = () => {
    ifShowMyContact ? changeContactLogo(require('./images/follow.png')) : changeContactLogo(require('./images/unfollow.png')) ;
    changeIfShowMyContact(!ifShowMyContact);
  }
  const ContactMessageRender = (
      <ul className="my-message">
            <li className="iconfont icon-github"></li>
            <li className="iconfont icon-gongzhonghao"></li>
            <li className="iconfont icon-youjian"></li>
      </ul>
  )
  return (
    <div className="followme">
      {
        ifShowMyContact ? ContactMessageRender : null
      }
      
      <img className="logo" onClick={ changeLogo } src={ contactLogoURL } alt='' />
    </div>
  );
  
}

export default Followme;
