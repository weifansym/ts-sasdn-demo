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
const libCrypto = require("crypto");
class RequestIdHandler {
    /**
     * Provide a koa middleware register function
     */
    register() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            const reqId = libCrypto.randomBytes(12);
            if (Buffer.isBuffer(reqId)) {
                ctx.reqId = reqId.toString('hex');
            }
            else {
                ctx.reqId = reqId;
            }
            yield next();
        });
    }
}
const instance = new RequestIdHandler();
exports.default = instance;
//# sourceMappingURL=requestIdHandler.js.map