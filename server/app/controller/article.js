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
  async getArticleDetail() {
    const ctx = this.ctx;
    const articleDetail = await ctx.service.article.getArticleDetail(ctx.query);
    ctx.body = articleDetail;
    
  }
  async addArticle() {
    const ctx = this.ctx;
    const result = await ctx.service.article.addArticle(ctx.request.body);
    ctx.body = result;
  }
  async updateArticle() {
    const ctx = this.ctx;
    const result = await ctx.service.article.updateArticle(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = ArticleController;
