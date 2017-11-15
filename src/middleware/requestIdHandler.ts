import * as libCrypto from 'crypto'

class RequestIdHandler {

  /**
   * Provide a koa middleware register function
   */
  register () {
    return async (ctx: any, next: any) => {
        const reqId = libCrypto.randomBytes(12);
        if (Buffer.isBuffer(reqId)) {
            ctx.reqId = reqId.toString('hex');
        } else {
            ctx.reqId = reqId;
        }
      await next()
    }
  }

}

const instance = new RequestIdHandler()

export default instance
