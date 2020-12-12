import React, { useState, useEffect } from 'react';
import { Input, Button, Card, message } from 'antd';
import axios from 'axios';
import './index.less';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;



function Homepage() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const userNameChange = (e: any) => {
        setUserName(e.target.value)
    };
    const passWordChange = (e: any) => {
        setPassWord(e.target.value)
    };
    const login = () => {
        console.log(userName, passWord);
        if(userName && passWord) {
            axios.get(`http://127.0.0.1:7001/login?username=${userName}&password=${passWord}`)
                .then(res => {
                    if (res.status === 200) {
                        message.success('登陆成功');
                        window.localStorage.setItem('loginToken', res.data);
                        console.log(res.data)
                    } else {
                        message.error(`登陆失败, 错误码: ${res.status}`)
                    }
                })
        }
    }
    return (
        <div className="homepage">
            <div className="login">
                <Card className="login-box" title="登陆" style={{ width: 300 }}>

                    <div className="content">
                        <Input className="input" value={userName} onChange={userNameChange} placeholder="请输入账号"/>
                        <Input className="input" value={passWord} onChange={passWordChange} placeholder="请输入密码"/>
                        <Button  className="btn" type="primary" onClick={ login }>登陆</Button>
                        <div className="tips">
                            注意：这里的登陆其实就是为了获取token, 显示登陆成功就ok了, 不必再care这个框框的显示, 目前token有效时间半个小时
                        </div>
                    </div>
                </Card>

            </div>
        </div>
        
    )
}

export default Homepage;