"use strict";

const libCrypto = require('crypto');

class RequestIdHandler {

  /**
   * Provide a koa middleware register function
   */
  register() {
    return function *requestIdRegister(next) {

      yield next;
    };
  }

}

const instance = new RequestIdHandler();

module.exports = instance;