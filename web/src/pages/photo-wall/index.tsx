import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Banner from '../../components/banner';
import ArticleContent from '../../components/acticle-content';
import Followme from '../../components/followme';
import './index.less';
import axios from 'axios';
import WaterFall from '../../components/water-fall';

import { urlPrefix } from '../../utils/global';
function PhotoWall() {
  const [ifAtTop, setAtTop] = useState(true);
  const [articleDetail, setArticleDetail] = useState({
    title: '',
    content: '',
    abstract: '',
    cover: ''
  });

  const [photoList, setPhotoList] = useState([]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false);

    axios.get(`${urlPrefix}/getphoto`)
    .then(res => {
      if(res.status === 200) {
        setPhotoList(res.data);
      }
    })
  }, [])

  return (
    <div className="photo-wall">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title="剪影"
        abstract="record with photos"
        // cover={ articleDetail.cover }
        // cover="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607540126387&di=7de9d9837f5b4445666614ea7c7a30b9&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F55%2F79%2F465b15d957c810f.jpg"
        />
        
        <WaterFall photoList={photoList} />

      <Followme />
    </div>
  );

}

export default PhotoWall;
