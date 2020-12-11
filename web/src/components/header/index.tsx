import React from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/">首页</Link></li>
        <li><Link to="/catalogue">目录</Link></li>
        <li><Link to="/pigeonhole">归档</Link></li>
        <li><Link to="/essays">杂文</Link></li>
        <li><Link to="/photowall">生活剪影</Link></li>
        <li><Link to="/aboutme">关于</Link></li>
      </ul>
    </div>
  );
  
}

export default Header;
