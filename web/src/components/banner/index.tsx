import React from 'react';
import './index.less';
interface bannerProps {
  title: string,
  abstract: string
}
function Banner(props: bannerProps) {
  return (
    <div className="banner">
      <h1 className="title">{ props.title }</h1>
      <div className="desc">{ props.abstract }</div>
    </div>
  );
  
}

export default Banner;
