import React from 'react';
import './index.less';
import Nav from '../../components/nav';
import CSS from 'csstype';
const backImg: CSS.Properties = {
  color: 'red',
  backgroundImage: 'url("http://www.jerrymei.cn/assets/images/30+wallpaper/bg-cover17.jpg")'
};

function HomePage() {
  return (
    <div className="homepage animated fadeIn" style={ backImg }>
      <Nav />
      <div
        className="home-middle"
        >
        <div>
          <div className="title">Mch's Blog</div>
          <div className="desc">编程/科技/文学/剪影</div>
          <nav className="nav">
            <ul>
              <li className="iconfont icon-github"></li>
              <li className="iconfont icon-gongzhonghao"></li>
              <li className="iconfont icon-xiangji"></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="home-bottom"></div>
    </div>
  );
  
}

export default HomePage;
