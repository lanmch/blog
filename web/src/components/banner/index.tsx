import React from 'react';
import './index.less';
interface bannerProps {
  title: string,
  abstract: string,
  cover? : string
}

function Banner(props: bannerProps) {
  const backStyle = {
    background: `url('${props.cover}') no-repeat center`,
    // backgroundSize: 'cover'
    backgroundSize: '100% 100%'
  }
  return (
    <div className="banner"
      style={props.cover? backStyle : undefined}>
      <h1 className="title">{ props.title }</h1>
      <div className="desc">{ props.abstract }</div>
    </div>
  );
  
}

export default Banner;
