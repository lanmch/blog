import React, { useState, useEffect } from 'react';
import { Input, Button, message, Space } from 'antd';
import axios from 'axios';
import './index.less';
import { useLocation, useHistory } from 'react-router-dom';
const { TextArea } = Input;

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
const successMessage = () => {
    message.success('发布成功~');
};
const errorMessage = () => {
    message.error('发布失败~');
};

function WriteArticle() {

    const history = useHistory();
    const state: any = useLocation().state;
    const articleId = isNaN(parseInt(state.articleId)) ? 0 : parseInt(state.articleId);
    const [articleContent, setArticleContent] = useState('');
    const contentOnChange = ({ target: { value } }: any) => {
        setArticleContent(value);
    };
    const [title, setTitle] = useState('');
    const [abstract, setAbstact] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const PubArticle = (articleId: number) => {
        let url = articleId ? 'http://127.0.0.1:7001/updateArticle' : 'http://127.0.0.1:7001/addArticle'
        // 修改文章
        let params: any = {
            title,
            abstract,
            content,
            cover,
            author,
        }
        if (articleId) params = { ...params, articleId };
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxhbm1jaCIsInBhc3N3b3JkIjoibGFubWNoIiwiaWF0IjoxNjA2NzU2Mjk2LCJleHAiOjE2MDY3NTYzMjZ9.IZ0OnBd3iM8sZ3WFRtA-WCwZwS2cOEN58zR3Xklgr5g";
        
        
        axios.interceptors.response.use( response => {
            return Promise.resolve(response);
        }, error =>{
            switch(error.response.status){
                case 401:
                        // localStorage.removeItem('token')
                        message.error('发布失败~token已过期');
                        break;
                default:break;
            }
            return Promise.reject(error);
        })
        axios.post(url, params).then(async (res) => {
            if (res.status == 200) {
                successMessage();
                setTimeout(() => {

                    history.goBack();
                }, 2000);
            } else {
                errorMessage();
            }
        })
    }
    // const articleDetail = useFetchGet(`http://127.0.0.1:7001/getArticleDetail?articleId=${articleId}`);

    useEffect(() => {
        axios.get(`http://127.0.0.1:7001/getArticleDetail?articleId=${articleId}`)
            .then(res => {
                if (res.data.articleDetail) {
                    setTitle(res.data.articleDetail.title);
                    setAbstact(res.data.articleDetail.abstract);
                    setContent(res.data.articleDetail.content);
                    setCover(res.data.articleDetail.cover);
                    setAuthor(res.data.articleDetail.author);
                };
            })
    }, []);


    const titleChange = (e: { target: { value: string } }) => {
        setTitle(e.target.value)
    }
    const abstractChange = (e: { target: { value: string } }) => {
        setAbstact(e.target.value)
    }
    const contentChange = (e: { target: { value: string } }) => {
        setContent(e.target.value)
    }
    const coverChange = (e: { target: { value: string } }) => {
        setCover(e.target.value)
    }
    const authorChange = (e: { target: { value: string } }) => {
        setAuthor(e.target.value);
    }
    return (
        // articleDetail && articleDetail.articleDetail ?
        <div className="wrtie-article">
            <h2>文章标题</h2>
            <Input placeholder="请输入标题" value={title} onChange={titleChange} />
            <h2>文章摘要</h2>
            <TextArea placeholder="请输入文章摘要" rows={4} value={abstract} onChange={abstractChange} />
            <h2>文章内容</h2>
            <TextArea placeholder="请输入文章内容" autoSize={{ minRows: 30, maxRows: 40 }} value={content} onChange={contentChange} />
            {/* <h2>文章标签</h2>
            <Input placeholder="请输入标签" /> */}
            <h2>文章作者</h2>
            <Input placeholder="请输入姓名" value={author} onChange={authorChange} />
            <h2>文章背景图</h2>
            <TextArea rows={4} placeholder="请输入输入背景图链接" value={cover} onChange={coverChange} />
            <img className="cover" src={cover} alt="图片加载失败/无图片" />
            <div className="btn">
                <Button type="dashed" danger>隐藏</Button>
                <Button type="primary" danger>删除</Button>
                <Button type="primary" onClick={() => { PubArticle(articleId) }}>发布</Button>
            </div>
        </div>
        // : <div className="wrtie-article">
        //     <h2>文章标题</h2>
        //     <Input placeholder="请输入标题" />
        //     <h2>文章摘要</h2>
        //     <TextArea placeholder="请输入文章摘要" rows={4} />
        //     <h2>文章内容</h2>
        //     <TextArea placeholder="请输入文章内容" autoSize={{ minRows: 30, maxRows: 40 }} />
        //     <h2>文章标签</h2>
        //     <Input placeholder="请输入标签" />
        //     <h2>文章背景图</h2>
        //     <TextArea rows={4} placeholder="请输入输入背景图链接" />
        //     <img className="cover" src="" alt="图片加载失败/无图片" />
        //     <div className="btn">
        //         <Button type="dashed" danger>隐藏</Button>
        //         <Button type="primary" danger>删除</Button>
        //         <Button type="primary" onClick={() => { PubArticle(articleId) }}>发布</Button>
        //     </div>
        // </div>

    )
}

export default WriteArticle;