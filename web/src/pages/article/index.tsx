import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Banner from '../../components/banner';
import ArticleContent from '../../components/acticle-content';
import Followme from '../../components/followme';
import './index.less';

const useFetch = (url: string): any => {
  const [data, setData] = useState({})
  useEffect(() => {
      fetch(url).then(async(res) => {
        const json = await res.json();
        setData(json);
      })
    }, [])
    return data
}

function Article() {
  const [ifAtTop, setAtTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false)
  }, [])
  const article = '# 这是标题\n' +
  '## 执行上下文/作用域链/闭包\n' +
  '- 全局执行上下文： 默认/基础上下文，任何不在函数内部的代码都在全局上下文中。它执行两件事：创建全局window对象和设置this等于这个全局对象（一个程序中有且只有一个）\n' +
  '- 函数执行上下文：函数调用时创建\n' +
  '- eval函数执行上下文：执行在eval函数内部代码中的上下文\n' +
  '\n' +
  '1. this\n' + '2. no\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(Hello World)\` \n\n'+
  '```javascript\n' +
  'const a=2;\n' +
  'console.log("10086");\n' +
  '```'
  console.log()
  const state: any = useLocation().state;
  const articleId = isNaN(parseInt(state.articleId)) ? 0 : parseInt(state.articleId)
  const { articleDetail = {} } = useFetch(`http://127.0.0.1:7001/getArticleDetail?articleId=${articleId}`);
  console.log(articleDetail)
  return (
    <div className="article">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title={ articleDetail.title }
        abstract={ articleDetail.abstract }
        />
      <ArticleContent article={ articleDetail.content }/>
      <Followme />
    </div>
  );

}

export default Article;
