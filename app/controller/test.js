'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    this.ctx.body = {
      data: {
        user: 'admin',
        age: 14,
      },
      message: 'ok',
      code: 200,
    };
  }
}

module.exports = TestController;
