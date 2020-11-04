import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

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
        <li><Link to="/catalogue">目录</Link></li>
        <li>|</li>
        <li><Link to="/pigeonhole">归档</Link></li>
        <li>|</li>
        <li><Link to="/catalogue">关于</Link></li>
        <li>|</li>
        <li>归档</li>
    </ul>
  )
  return (
    <div className="navigator" onMouseLeave={handleMouseOutNav}>
      {
        ifShowNav ? NavItem : null
      }

      <img
        src={navLogoUrl}
        className="logo"
        onMouseOver={handleMouseOverNav}
      />
    </div>
  );

}

export default Nav;
