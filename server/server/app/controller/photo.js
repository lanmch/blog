'use strict';

const Controller = require('egg').Controller;

class PhotoController extends Controller {
  async getPhotos(){
    console.log('asdasds')
    const ctx = this.ctx;
    const photoList = await ctx.service.photo.getPhotoList();
    ctx.body = photoList;
}
}

module.exports = PhotoController;
