
import HomePage from './pages/index';
import React, { useState } from 'react';
import { BrowserRouter, Route, useHistory, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
  BookOutlined,
  FileImageOutlined,
  TagOutlined
} from '@ant-design/icons';
import './index.less';
import Homepage from './components/index';
import ArticleList from './components/articleList';
import WriteArticle from './components/writeArticle';
import ArticleType from './components/articleType';
import './App.css';
import PhotoList from './components/photoList';
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">

      <BrowserRouter>
        <div className="homepage App">
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo">Mch's Blog</div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />} >
              <Link to="/article-list">文章管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileImageOutlined />} >
              <Link to="/article-type">板块/封面管理</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileImageOutlined />} >
              <Link to="/photo-list">照片墙管理</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<TagOutlined />}>
                  标签/分类管理
            </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  //   onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Route path="/" exact component={Homepage} />
                <Route path="/article-list" exact component={ArticleList} />
                <Route path="/write-article" component={WriteArticle} />
                <Route path="/article-type" component={ArticleType} />
                <Route path="/photo-list" component={PhotoList} />
              </Content>
            </Layout>
          </Layout>
        </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
