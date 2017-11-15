import * as url from 'url'
import * as _JWT from 'jsonwebtoken'
import * as unless from 'koa-unless'
import * as koa_convert from 'koa-convert'
import * as jwt from 'koa-jwt'


class JWTHandler {
  /**
   * Provide a koa middleware register function
   */
  register(opts: any, paths: any) {
    opts = opts || {}
    opts.paths = paths || []
    opts.key = opts.key || 'user'

    const middleware: any = async (ctx: any, next: any) => {

      // 1. path is []: every router path need validate
      // 2. path is [path, ...]: only validate router path in this array
      let needJwt: boolean = true
      const requestedUrl: any = url.parse((ctx.url) || '', true)

      if (opts.paths.length > 0) {
        needJwt = opts.paths.some((p: any) => {
          return (typeof p === 'string' && p === requestedUrl.pathname) || (p instanceof RegExp && !! p.exec(requestedUrl.pathname))
        })
      }

      //  todo:接下来可以使用koa-jwt，代替下面的效验，因为koa-jwt本身自带unless功能
      if (needJwt) {
        let token: any
        let msg: string
        let user: any
        let parts: any
        let scheme: any
        let credentials: any
        let secret: any

        if (opts.getToken) {
          token = opts.getToken.call(ctx)
        } else if (opts.cookie && ctx.cookies.get(opts.cookie)) {
          token = ctx.cookies.get(opts.cookie)

        } else if (ctx.header.authorization) {
          parts = ctx.header.authorization.split(' ')
          if (parts.length === 2) {
            scheme = parts[0]
            credentials = parts[1]

            if (/^Bearer$/i.test(scheme)) {
              token = credentials
            }
          } else {
            if (!opts.passthrough) {
              ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"\n')
            }
          }
        } else {
          if (!opts.passthrough) {
            ctx.throw(401, 'No Authorization header found\n')
          }
        }

        secret = (ctx.state && ctx.state.secret) ? ctx.state.secret : opts.secret
        if (!secret) {
          ctx.throw(500, 'Invalid secret\n')
        }

        try {
          user = await _JWT.verify(token, secret, opts)
          // user = await jwt({'secret': secret});
        } catch (e) {
          msg = 'Invalid token' + (opts.debug ? ' - ' + e.message + '\n' : '\n')
        }

        if (user || opts.passthrough) {
          ctx.state = ctx.state || {}
          ctx.state[opts.key] = user
          await next()
        } else {
          ctx.throw(401, msg)
        }
      } else {
        await next()
      }
    }

    middleware.unless = koa_convert(unless)

    return middleware
  }
}

const instance = new JWTHandler()

export default instance


