import React, { useState } from 'react';
import './index.less';
function Footer() {
  const ContactMessageRender = (
      <ul className="my-message">
            <li className="iconfont icon-github"></li>
            <li className="iconfont icon-gongzhonghao"></li>
            <li className="iconfont icon-youjian"></li>
      </ul>
  )
  return (
    <div className="footer">
        <ul>
            <a href="https://github.com/lanmch"><li className="iconfont icon-github"></li></a>
            <a href="/aboutme"><li className="iconfont icon-gongzhonghao"></li></a>
            {/* <a href="www.lanmch.com/aboutme"><li className="iconfont icon-xiangji"></li></a> */}
        </ul>
	    <a className='ba' target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51080202000122">
            <img src={ require('./img/icon.png') }/>
            <p>川公网安备 51080202000122号</p>
        </a>
	</div>
  );
  
}

export default Footer;
