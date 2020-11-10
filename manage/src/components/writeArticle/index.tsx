import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
import './index.less';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;

const useFetchPost = (url: string, options: any): any => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.post(url, options).then(async (res) => {
            const json = await res;
            setData(json);
        })
    }, [])
    console.log(data);
    return data
}
const useFetchGet = (url: string): any => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(url).then(async (res) => {
            const json = await res;
            setData(json.data);
        })
    }, [])
    
    return data
};

function WriteArticle() {
    const state: any = useLocation().state;
    const articleId = isNaN(parseInt(state.articleId)) ? 0 : parseInt(state.articleId);
    const [articleContent, setArticleContent] = useState('');
    const contentOnChange = ({ target: { value } }: any) => {
        setArticleContent(value);
    };

    const PubArticle = (articleId: number) => {
        const res1 = axios.post(`http://127.0.0.1:7001/addArticle`, {
            title: 'test Title1',
            abstract: 'abs test',
            content: 'test content',
            cover: 'img',
            author: 'LMC'
        }).then(async (res) => {
            console.log(res)
        })
    }
    const articleDetail = useFetchGet(`http://127.0.0.1:7001/getArticleDetail?articleId=${articleId}`);
    
    return (
        articleDetail && articleDetail.articleDetail ?
        <div className="wrtie-article">
            <h2>文章标题</h2>
            <Input placeholder="请输入标题" value={articleDetail.articleDetail.title}/>
            <h2>文章摘要</h2>
            <TextArea placeholder="请输入文章摘要" rows={4} value={articleDetail.articleDetail.abstract}/>
            <h2>文章内容</h2>
            <TextArea placeholder="请输入文章内容" autoSize={{ minRows: 30, maxRows: 40 }} value={articleDetail.articleDetail.content} />
            <h2>文章标签</h2>
            <Input placeholder="请输入标签" />
            <h2>文章背景图</h2>
            <Input placeholder="请输入输入背景图链接" />
            <img className="cover" src="" alt="图片加载失败/无图片" />
            <div className="btn">
                <Button type="dashed" danger>隐藏</Button>
                <Button type="primary" danger>删除</Button>
                <Button type="primary" onClick={() => { PubArticle(articleId) }}>发布</Button>
            </div>
        </div> : <div className="wrtie-article">
            <h2>文章标题</h2>
            <Input placeholder="请输入标题" />
            <h2>文章摘要</h2>
            <TextArea placeholder="请输入文章摘要" rows={4} />
            <h2>文章内容</h2>
            <TextArea placeholder="请输入文章内容" autoSize={{ minRows: 30, maxRows: 40 }} />
            <h2>文章标签</h2>
            <Input placeholder="请输入标签" />
            <h2>文章背景图</h2>
            <Input placeholder="请输入输入背景图链接" />
            <img className="cover" src="" alt="图片加载失败/无图片" />
            <div className="btn">
                <Button type="dashed" danger>隐藏</Button>
                <Button type="primary" danger>删除</Button>
                <Button type="primary" onClick={() => { PubArticle(articleId) }}>发布</Button>
            </div>
        </div>
        
    )
}

export default WriteArticle;