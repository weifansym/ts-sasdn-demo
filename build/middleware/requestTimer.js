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
class RequestTimer {
    register() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            const start = new Date();
            yield next();
            const end = new Date();
            const consumed = end - start;
            if (process.env.hasOwnProperty('DEBUG')) {
                ctx.set('X-Response-Time', consumed + 'ms');
            }
            console.log(ctx.reqId, '%s %s - %s ms', ctx.method, ctx.url, consumed);
        });
    }
}
const timer = new RequestTimer();
exports.default = timer;
//# sourceMappingURL=requestTimer.js.map