import React, { useEffect, useState } from 'react';
import './index.less';
import Header from '../../components/header';
function AboutMe() {
    const [ifAtTop, setAtTop] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
        window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
        }, false)
    }, [])
  return (
    <div className="about-me">
        <Header ifAtTop={ false } />
        <div className="content">
            <img className="img" src={ require('./imgs/me.png') } />
            <div className="info">
                <div className="name">LanMch</div>
                <div className="signature">just wanna be<br/>the unusual coder</div>
                <div className="code">
                    <img src={ require('./imgs/vxcode.png') } className="code-item" />
                </div>
            </div>
        </div>
    </div>
  );
  
}

export default AboutMe;
