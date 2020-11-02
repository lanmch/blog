import React, { useEffect, useState } from 'react';
import './index.less';
const useFetch = (url: string): any => {
  const [data, setData] = useState({})
  useEffect(():any => (
    async () => {
      const resp = await fetch(url)
      const json = await resp.json()
      setData(json)
  }), [])

  return data
}
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
function CatalogueList() {
  const { articleList } = useFetch("http://127.0.0.1:7001/getArticleList");

  return (
    <div className="catalogue-list">
      {
        articleList ? articleList.map((item: any, index: number) => {
          return (
              <div className="catalogue-list-item" key={index}>
                <h2 className="title">{ item.title }</h2>
                <div className="abstract">
                  { item.abstract }
                </div>
                <div className="publish-time">Posted by { item.author } on { formatTimeAndAuthor(item.tsp) }</div>

                <hr />
              </div>
          )
        }) : null
      }
      <div className="catalogue-list-item">
        <h2 className="title">字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来</h2>
        <div className="abstract">
          2018 年 12 月 ，Google  宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。
          Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      <hr />
      </div>
      <div className="catalogue-list-item">
        <h2 className="title">彻底掌握Timeline原理(一)</h2>
        <div className="abstract">一、概述1.1 Timeline事件总览C++引擎层层采用的是采用的是Embedder Stream；Dart应用层采用的是Dart Stream;DartVM采用的API Stream；
            1.2 C++层Timeline用法1.2.1 C++同步事件#include "flutter/fml/trace_event.h"#define TRACE...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      </div>
      <hr />
      <div className="catalogue-list-item">
        <h2 className="title">字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来</h2>
        <div className="abstract">
          2018 年 12 月 ，Google  宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。
          Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      </div>
      <hr />
      <div className="catalogue-list-item">
        <h2 className="title">彻底掌握Timeline原理(一)</h2>
        <div className="abstract">一、概述1.1 Timeline事件总览C++引擎层层采用的是采用的是Embedder Stream；Dart应用层采用的是Dart Stream;DartVM采用的API Stream；
            1.2 C++层Timeline用法1.2.1 C++同步事件#include "flutter/fml/trace_event.h"#define TRACE...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      </div>
      <hr />
      <div className="catalogue-list-item">
        <h2 className="title">字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来</h2>
        <div className="abstract">
          2018 年 12 月 ，Google  宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。
          Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      </div>
      <hr />
      <div className="catalogue-list-item">
        <h2 className="title">彻底掌握Timeline原理(一)</h2>
        <div className="abstract">一、概述1.1 Timeline事件总览C++引擎层层采用的是采用的是Embedder Stream；Dart应用层采用的是Dart Stream;DartVM采用的API Stream；
            1.2 C++层Timeline用法1.2.1 C++同步事件#include "flutter/fml/trace_event.h"#define TRACE...
        </div>
        <div className="publish-time">Posted by Mch on March 26, 2020</div>
      </div>
    </div>
  );
  
}

export default CatalogueList;
