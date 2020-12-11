const Service = require('egg').Service;
class ArticleService extends Service {
  async getArticleList() {
    const { app } = this;
    try {
      const articleList = await app.mysql.select('article', {
        orders: [['tsp','desc']]
      });
      
      return {
        articleList,
      };
    } catch (err) {
      return null;
    }
  }

  async getArticlePigeonhole() {
    const { app } = this;
    try {
      const pigeonholeList = await app.mysql.select('article');
      let timeObj = {};
      for(let item of pigeonholeList) {
        let year = item.tsp.toString().slice(11,15);
        if (timeObj[year]) {
          timeObj[year].unshift(item);
        } else {
          timeObj[year] = [];
          timeObj[year].unshift(item);
        }

      }
      return {
        pigeonholeList: timeObj,
      };
    } catch (err) {
      return null;
    }
  }

  async getArticleDetail(params) {
    const { app } = this;
    const { articleId = 0 } = params;
    try {
      const articleDetail = await app.mysql.get('article', { articleId });
      return {
        articleDetail
      };
    } catch (err) {
      return null;
    }
  }

  async addArticle(params) {
    const { title, abstract, content, cover, author } = params;
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', { 
        title,
        abstract,
        content,
        author,
        type: 4,
        cover
       });
      return {
        result
      };
    } catch (err) {
      return null;
    }
  }
  async updateArticle(params) {
    const { title, abstract, content, cover, author, articleId } = params;
    const { app } = this;
    try {
      const result = await app.mysql.update('article', { 
        title,
        abstract,
        content,
        author,
        type: 1,
        cover
       }, { where: { articleId } });
      return {
        result
      };
    } catch (err) {
      console.log(err)
      return null;
    }
  }
}

module.exports = ArticleService;