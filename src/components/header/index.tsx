import React from 'react';
import './index.less';
import classnames from 'classnames';

function Header(props: { ifAtTop: boolean}) {
  const { ifAtTop } = props;

  console.log(ifAtTop)
  const headerClass = classnames({
    "header": ifAtTop,
    "header-scroll": !ifAtTop
  })
  return (
    <div className={ headerClass }>
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
