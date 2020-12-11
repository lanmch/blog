import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
import axios from 'axios';

import { urlPrefix } from '../../utils/global';
// const useFetch = (url: string): any => {
//   const [data, setData] = useState({})
//   useEffect(() => {
//       fetch(url).then(async(res) => {
//         const json = await res.json();
//         setData(json);
//       })
//     }, [])
//     return data
// }
const formatTimeAndAuthor = (tsp: string): string => {
  // xxxx-xx-xx
  let formatTsp = tsp.slice(0, 10);
  let y = formatTsp.slice(0, 4);
  let m = formatTsp.slice(5, 7);
  let d = formatTsp.slice(8)
  switch (m) {
    case '01': m = 'January';break;
    case '02': m = 'February';break;
    case '03': m = 'March';break;
    case '04': m = 'April';break;
    case '05': m = 'May';break;
    case '06': m = 'June';break;
    case '07': m = 'July';break;
    case '08': m = 'August';break;
    case '09': m = 'September';break;
    case '10': m = 'October';break;
    case '11': m = 'November';break;
    case '12': m = 'December';break;
  }
  return `${m} ${d}, ${y}`
}


function EssaysList() {
  // const { articleList } = useFetch("http://127.0.0.1:7001/getArticleList");
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    axios.get(`${urlPrefix}/getEssayList`)
      .then(res => {
        setArticleList(res.data.essayList)
      })
  }, []);
  const history = useHistory();
  return (
    <div className="catalogue-list">
      {
        articleList ? articleList.map((item: any, index: number) => {
          return (
              <div className="catalogue-list-item" key={index}>
                <h2 className="title" onClick={ ()=> { history.push(`/article`,  { articleId: item.articleId })}}>{ item.title }</h2>
                <div className="abstract" onClick={ ()=> { history.push('/article', { articleId: item.articleId }) } }>
                  { item.abstract }
                </div>
                <div className="publish-time">Posted by { item.author? item.author : 'anonymity' } on { formatTimeAndAuthor(item.tsp) }</div>

                <hr />
              </div>
          )
        }) : null
      }
    </div>
  );
  
}

export default EssaysList;
