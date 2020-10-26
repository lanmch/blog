import React, { useState } from 'react';
import './index.less';
import a from './images/nav.png'
function Nav() {
  const [navLogoUrl, setNavLogoUrl] = useState(require('./images/nav.png'));
  const handleMouseOverNav = () => {
    setNavLogoUrl(require('./images/nav-hover.png'));
  }
  const handleMouseOutNav = () => {
    setNavLogoUrl(require('./images/nav.png'));
  }
  
  return (
    <div className="navigator">
      <img
        src={ navLogoUrl }
        className="logo"
        onMouseOver={ handleMouseOverNav }
        onMouseLeave={ handleMouseOutNav }
        />
    </div>
  );
  
}

export default Nav;
