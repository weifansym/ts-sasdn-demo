"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const _JWT = require("jsonwebtoken");
const unless = require("koa-unless");
const koa_convert = require("koa-convert");
class JWTHandler {
    /**
     * Provide a koa middleware register function
     */
    register(opts, paths) {
        opts = opts || {};
        opts.paths = paths || [];
        opts.key = opts.key || 'user';
        const middleware = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            // 1. path is []: every router path need validate
            // 2. path is [path, ...]: only validate router path in this array
            let needJwt = true;
            const requestedUrl = url.parse((ctx.url) || '', true);
            if (opts.paths.length > 0) {
                needJwt = opts.paths.some((p) => {
                    return (typeof p === 'string' && p === requestedUrl.pathname) || (p instanceof RegExp && !!p.exec(requestedUrl.pathname));
                });
            }
            //  todo:接下来可以使用koa-jwt，代替下面的效验，因为koa-jwt本身自带unless功能
            if (needJwt) {
                let token;
                let msg;
                let user;
                let parts;
                let scheme;
                let credentials;
                let secret;
                if (opts.getToken) {
                    token = opts.getToken.call(ctx);
                }
                else if (opts.cookie && ctx.cookies.get(opts.cookie)) {
                    token = ctx.cookies.get(opts.cookie);
                }
                else if (ctx.header.authorization) {
                    parts = ctx.header.authorization.split(' ');
                    if (parts.length === 2) {
                        scheme = parts[0];
                        credentials = parts[1];
                        if (/^Bearer$/i.test(scheme)) {
                            token = credentials;
                        }
                    }
                    else {
                        if (!opts.passthrough) {
                            ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"\n');
                        }
                    }
                }
                else {
                    if (!opts.passthrough) {
                        ctx.throw(401, 'No Authorization header found\n');
                    }
                }
                secret = (ctx.state && ctx.state.secret) ? ctx.state.secret : opts.secret;
                if (!secret) {
                    ctx.throw(500, 'Invalid secret\n');
                }
                try {
                    user = yield _JWT.verify(token, secret, opts);
                    // user = await jwt({'secret': secret});
                }
                catch (e) {
                    msg = 'Invalid token' + (opts.debug ? ' - ' + e.message + '\n' : '\n');
                }
                if (user || opts.passthrough) {
                    ctx.state = ctx.state || {};
                    ctx.state[opts.key] = user;
                    yield next();
                }
                else {
                    ctx.throw(401, msg);
                }
            }
            else {
                yield next();
            }
        });
        middleware.unless = koa_convert(unless);
        return middleware;
    }
}
const instance = new JWTHandler();
exports.default = instance;
//# sourceMappingURL=jwtHandler.js.map