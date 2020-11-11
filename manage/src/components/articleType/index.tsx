import React, { useState, useEffect } from 'react';
import { Input, Button, Card } from 'antd';
import axios from 'axios';
import './index.less';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;
const { Meta } = Card;



function ArticleType() {
    return (
        <div className="article-type">
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
        </div>
        
    )
}

export default ArticleType;