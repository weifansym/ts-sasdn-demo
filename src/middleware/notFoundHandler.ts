class NotFoundHandler {

  register () {
    return async (ctx: any, next: any) => {
      await next()
      if (404 !== ctx.status) {
        return
      }
      ctx.status = 404
      switch (ctx.accepts('html', 'json')) {
        case 'html':
          ctx.type = 'html'
          ctx.body = '<html><body><h4>404</h4></body></html>'
          break
        case 'json':
          ctx.body = {
            message: 'Page Not Found'
          }
          break
        default:
          ctx.type = 'text'
          ctx.body = 'Page Not Found'
      }

      console.log('%s %s 404 Not found', ctx.method, ctx.url)
    }
  }

}

const handler = new NotFoundHandler()

export default handler
