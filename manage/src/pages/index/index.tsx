import React, { useState } from 'react';
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

import ArticleList from '../../components/articleList';
import WriteArticle from '../../components/writeArticle';
const { Header, Sider, Content } = Layout;
function HomePage() {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="homepage">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">ManageMent of Blog</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<BarChartOutlined />}>
                            首页
            </Menu.Item>
                        <Menu.Item key="2" icon={<BookOutlined />}>
                            文章管理
            </Menu.Item>
                        <Menu.Item key="3" icon={<FileImageOutlined />}>
                            板块封面管理
            </Menu.Item>
                        <Menu.Item key="4" icon={<TagOutlined />}>
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
                        {/* <ArticleList /> */}
                        <WriteArticle />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default HomePage;
