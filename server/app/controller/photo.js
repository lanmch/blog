'use strict';

const Controller = require('egg').Controller;

class PhotoController extends Controller {
  async getPhotos(){
    try {
      const ctx = this.ctx;
      const photoList = await ctx.service.photo.getPhotoList();
      ctx.body = photoList;
    } catch(e) {
      console.log('=====',e )
    }
  }
}

module.exports = PhotoController;
