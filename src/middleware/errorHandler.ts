class ErrorHandler {
  register () {
    return async (ctx: any, next: any) => {
      try {
        await next()
      } catch (e) {
        const status: number = e.status || 500
        const message: string = e.message || 'Internal Server Error'
        console.log('status: %s, message: %s', status, message)
        ctx.status = status
        if (status === 500) {
          ctx.body = message
          // trigger koa stack
          ctx.app.emit('error', e, ctx)
        }

        if (status === 404) {
          ctx.body = 'Not found'
        }
      }
    }
  }
}

const handler: ErrorHandler = new ErrorHandler()
export default handler
