class RequestTimer {

  register () {
    return async (ctx: any, next: any) => {
      const start: any = new Date()
      await next()
      const end: any = new Date()
      const consumed: any = end - start
      if (process.env.hasOwnProperty('DEBUG')) {
        ctx.set('X-Response-Time', consumed + 'ms')
      }
      console.log(ctx.reqId, '%s %s - %s ms', ctx.method, ctx.url, consumed)
    }
  }

}

const timer = new RequestTimer()

export default timer
