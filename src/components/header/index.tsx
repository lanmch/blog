import React from 'react';
import './index.less';
function Header() {
  return (
    <div className="header">
      <div className="header-logo">Mch</div>
      <ul className="header-nav">
        <li>首页</li>
        <li>技术</li>
        <li>生活剪影</li>
        <li>归档</li>
        <li>关于</li>
      </ul>
    </div>
  );
  
}

export default Header;
