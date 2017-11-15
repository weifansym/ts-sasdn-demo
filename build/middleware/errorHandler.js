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
class ErrorHandler {
    register() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield next();
            }
            catch (e) {
                const status = e.status || 500;
                const message = e.message || 'Internal Server Error';
                console.log('status: %s, message: %s', status, message);
                ctx.status = status;
                if (status === 500) {
                    ctx.body = message;
                    // trigger koa stack
                    ctx.app.emit('error', e, ctx);
                }
                if (status === 404) {
                    ctx.body = 'Not found';
                }
            }
        });
    }
}
const handler = new ErrorHandler();
exports.default = handler;
//# sourceMappingURL=errorHandler.js.map