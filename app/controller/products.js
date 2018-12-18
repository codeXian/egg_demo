'use strict';

const Controller = require('egg').Controller;

class ProductsController extends Controller {
  async index() {
    this.ctx.body = {
      data: {
        products: [
          {
            id: 1,
            name: '手机',
            price: '6500',
          },
          {
            id: 2,
            name: '电脑',
            price: '10000',
          },
          {
            id: 3,
            name: '手表',
            price: '15000',
          },
        ],
      },
      message: 'ok',
      code: 200,
    };
  }
}

module.exports = ProductsController;
