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
class NotFoundHandler {
    register() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield next();
            if (404 !== ctx.status) {
                return;
            }
            ctx.status = 404;
            switch (ctx.accepts('html', 'json')) {
                case 'html':
                    ctx.type = 'html';
                    ctx.body = '<html><body><h4>404</h4></body></html>';
                    break;
                case 'json':
                    ctx.body = {
                        message: 'Page Not Found'
                    };
                    break;
                default:
                    ctx.type = 'text';
                    ctx.body = 'Page Not Found';
            }
            console.log('%s %s 404 Not found', ctx.method, ctx.url);
        });
    }
}
const handler = new NotFoundHandler();
exports.default = handler;
//# sourceMappingURL=notFoundHandler.js.map