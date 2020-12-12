'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.get('/getArticleList', controller.article.getArticleList);
  router.get('/getEssayList', controller.article.getEssayList);
  router.get('/getArticlePigeonhole', controller.article.getArticlePigeonhole);
  router.get('/getArticleDetail', controller.article.getArticleDetail);
  router.post('/addArticle', jwt, controller.article.addArticle);
  router.post('/updateArticle', jwt, controller.article.updateArticle);
  // router.post('/login', controller.user.login);
  router.get('/login', controller.user.login);

  router.get('/getphoto', controller.photo.getPhotos);
};
