'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = {
      data: {
        name: 'codexian',
        sex: 0,
        age: 24,
      },
      message: 'ok',
      code: 200,
    };
  }
}

module.exports = UserController;
