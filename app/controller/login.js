'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { username, password } = this.ctx.request.body;
    if (username === 'admin' && password === 'admin') {
      this.ctx.body = {
        data: {
          token: '682361879eer999943',
        },
        message: 'ok',
        code: 200,
      };
    } else {
      this.ctx.body = {
        data: {
          token: null,
        },
        message: 'error',
        code: 10000,
      };
    }
  }
}

module.exports = LoginController;
