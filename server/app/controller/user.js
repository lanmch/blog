'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login(){
    const ctx = this.ctx;
    const token = await ctx.service.user.login(ctx.query);
    ctx.body = token;
}
}

module.exports = UserController;
