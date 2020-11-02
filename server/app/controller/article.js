'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticleList(){
    const ctx = this.ctx;
    const articleList = await ctx.service.article.getArticleList();
    ctx.body = articleList;
  }

  async getArticlePigeonhole() {
    const ctx = this.ctx;
    const pigeonholeList = await ctx.service.article.getArticlePigeonhole();
    ctx.body = pigeonholeList;
    
  }
}

module.exports = ArticleController;
