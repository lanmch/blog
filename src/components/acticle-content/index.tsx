import React from 'react';
import ReactMarkdown from 'react-markdown'
import './index.less';
function ArticleContent(props: { article: string }) {
  return (
    <div className="article-content">
        <ReactMarkdown
            className="markdown"
            source={props.article}
        />
    </div>
  );
  
}

export default ArticleContent;
