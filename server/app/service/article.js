const Service = require('egg').Service;
class ArticleService extends Service {
  async getArticleList() {
    const { app } = this;
    try {
      const articleList = await app.mysql.select('article');
      
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
          timeObj[year].push(item);
        } else {
          timeObj[year] = [];
          timeObj[year].push(item);
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
}

module.exports = ArticleService;