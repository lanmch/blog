import React, { useState, useEffect } from 'react';
import { Input, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.less';
import { useLocation } from 'react-router-dom';
import { Popconfirm, message } from 'antd';
const { TextArea } = Input;
const { Meta } = Card;


function PhotoList() {
    const [photoList, setPhotoList] = useState([]);
    const [inputUrl, setInputUrl] = useState('');
    useEffect(() => {
        axios.get('http://127.0.0.1:7001/getphoto')
            .then(res => {
                if (res.status === 200) {
                    setPhotoList(res.data);
                }
            })
    }, []);
    const addPic = () => {
        console.log(inputUrl)
    }
    const inputUrlChange = (e: { target: { value: string } }) => {
        setInputUrl(e.target.value)
    }
    const confirm = (photoId: number) => {
        console.log(photoId);
        message.success('删除成功');
      }
      
    const cancel = (e: any) => {
        console.log(e);
        message.error('取消删除');
    }
    return (
        <div className="photo-list">
            <div className="add">
                <Input value={inputUrl} onChange={inputUrlChange} placeholder="输入url" />
                
                <Button type="primary" onClick={addPic}>增加</Button>

            </div>
            <div className="list">
            {
                photoList.map((item: any, index) => {
                    return (
                        <Card
                            className="card"
                            key={index}
                            hoverable
                            // style={{ width: 240 }}
                            cover={<img alt="example" src={item.photoUrl} />}
                        >   
                            <Popconfirm
                                title="确定要删除这张图片吗"
                                onConfirm={() => { confirm(item.photoId) }}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="primary" className="delete-btn" danger shape="circle" icon={<DeleteOutlined />} />
                            </Popconfirm>
                            <Meta className="meta" title={`photoId: ${item.photoId}`} description={`url:${item.photoUrl}`} />
                        </Card>
                    )
                })
            }
            </div>
        </div>
        
    )
}

export default PhotoList;