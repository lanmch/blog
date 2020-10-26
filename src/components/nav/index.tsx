import React, { useState } from 'react';
import './index.less';
import a from './images/nav.png'
function Nav() {
  const [navLogoUrl, setNavLogoUrl] = useState(require('./images/nav.png'));
  const [ifShowNav, setShowNav] = useState(false);

  // 控制nav显示与否
  const handleMouseOverNav = () => {
    setNavLogoUrl(require('./images/nav-hover.png'));
    setShowNav(true);
  }
  const handleMouseOutNav = () => {
    setNavLogoUrl(require('./images/nav.png'));
    setShowNav(false);
  }
  const NavItem = (
    <ul className="navigator-content">
      <li>编程</li>
      <li>|</li>
      <li>摄影</li>
      <li>|</li>
      <li>美食</li>
      <li>|</li>
      <li>归档</li>
    </ul>
  )
  return (
    <div className="navigator">
      {
        ifShowNav ? NavItem : null
      }

      <img
        src={navLogoUrl}
        className="logo"
        onMouseOver={handleMouseOverNav}
        onMouseLeave={handleMouseOutNav}
      />
    </div>
  );

}

export default Nav;
