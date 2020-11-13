import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Banner from '../../components/banner';
import ArticleContent from '../../components/acticle-content';
import Followme from '../../components/followme';
import './index.less';
import axios from 'axios';
import WaterFall from '../../components/water-fall';
function PhotoWall() {
  const [ifAtTop, setAtTop] = useState(true);
  const [articleDetail, setArticleDetail] = useState({
    title: '',
    content: '',
    abstract: '',
    cover: ''
  });
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false)
  }, [])

  return (
    <div className="photo-wall">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title="好图"
        abstract="好图记录生活"
        cover={ articleDetail.cover }
        />
        
        {/* <WaterFall /> */}
        <WaterFall />

      <Followme />
    </div>
  );

}

export default PhotoWall;
