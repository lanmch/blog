import React from 'react';
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../assets/utils/codeBlock';
import './index.less';
function ArticleContent(props: { article: string }) {
  return (
    <div className="article-content">
        <ReactMarkdown
            className="markdown"
            source={props.article}
            escapeHtml={false}
            renderers={{ code: CodeBlock }}

        />
    </div>
  );
  
}

export default ArticleContent;
