import React, { useState, useEffect } from 'react';
import { List, Avatar, Space, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './index.less';

const useFetch = (url: string): any => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(url).then(async (res) => {
      const json = await res.json();
      setData(json);
    })
  }, [])
  return data
}
const listData: any[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function ArticleList() {
  const { articleList = [] } = useFetch(`http://119.29.174.131:7001/getArticleList`);
  const history = useHistory();
  const editArticle = (articleId: number) => {
    history.push('/write-article', { articleId });
  }
  return (
    <div>
      <Button type="primary" style={{ marginBottom: "20px" }} onClick={() => { editArticle(0) }}>新建文章</Button>
      {
        articleList.length ?
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={articleList}
            footer={
              <div>
                共<b>5</b>篇文章
      </div>
            }
            renderItem={(item: any) => (
              <List.Item
                key={item.title}
                onClick={ () => { editArticle(item.articleId) } }
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={ item.cover ?
                  <img
                    width={272}
                    alt="logo"
                    src={ item.cover }
                  /> : <h5 style={{ width: 272, color: "blue" }}>暂无封面</h5>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.abstract}
                />
                {item.content.slice(0, 200) + '......'}
              </List.Item>
            )}
          /> : null
      }

    </div>
  )
}
export default ArticleList;