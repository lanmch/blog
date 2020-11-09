'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getArticleList', controller.article.getArticleList);
  router.get('/getArticlePigeonhole', controller.article.getArticlePigeonhole);
  router.get('/getArticleDetail', controller.article.getArticleDetail);
  router.post('/addArticle', controller.article.addArticle);
};
