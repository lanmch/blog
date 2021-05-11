import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Banner from '../../components/banner';
import ArticleContent from '../../components/acticle-content';
// import Followme from '../../components/followme';
import Footer from '../../components/footer';
import './index.less';
import axios from 'axios';
import { urlPrefix } from '../../utils/global';

function Article() {
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

  // const state: any = useLocation().state;
  // const articleId = isNaN(parseInt(state.articleId)) ? 0 : parseInt(state.articleId)
  
  let articleId = parseInt(useLocation().search.slice(useLocation().search.indexOf('=') + 1));
  articleId = articleId ? articleId : 1;
  useEffect(() => {
    axios.get(`${urlPrefix}/getArticleDetail?articleId=${articleId}`)
    .then(res => {
      setArticleDetail(res.data.articleDetail)
    })
  }, []);
  return (
    <div className="article">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title={ articleDetail.title }
        abstract={ articleDetail.abstract }
        cover={ articleDetail.cover }
        />
        {
          articleDetail.content.length ? 
          <ArticleContent article={ articleDetail.content }/> :
          <img src={ require('../../assets/img/loading.gif') } className="loading" />
        }
      {/* <Followme /> */}
      <Footer />
    </div>
  );

}

export default Article;
