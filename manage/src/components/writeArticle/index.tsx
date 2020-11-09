import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
import './index.less';
const { TextArea } = Input;

const useFetch = (url: string, options: any): any => {
    console.log(options)
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
const pubArticle = () => {
    console.log('dodo')
    
}
function WriteArticle() {
    const [articleContent, setArticleContent] = useState('');
    const contentOnChange = ({ target: { value } }: any) => {
        setArticleContent(value);
    };
    const { result } = useFetch(`http://127.0.0.1:7001/addArticle`, {
        title: 'test Title1',
        abstract: 'abs test',
        content: 'test content',
        cover: 'img',
        author: 'LMC'
    })
    return (
        <div className="wrtie-article">
            <h2>文章标题</h2>
            <Input placeholder="请输入标题" />
            <h2>文章摘要</h2>
            <TextArea placeholder="请输入文章摘要" rows={4} />
            <h2>文章内容</h2>
            <TextArea placeholder="请输入文章内容" autoSize={{ minRows: 30, maxRows: 40 }} />
            <h2>文章标签</h2>
            <Input placeholder="请输入标题" />
            <h2>文章背景图</h2>
            <Input placeholder="请输入标题" />
            <img className="cover" src="" alt="图片加载失败/无图片" />
            <div className="btn">
                <Button type="dashed" danger>隐藏</Button>
                <Button type="primary" danger>删除</Button>
                <Button type="primary" onClick={pubArticle}>发布</Button>
            </div>
        </div>
    )
}

export default WriteArticle;