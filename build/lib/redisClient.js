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
const ioredis = require("ioredis");
const joi = require("joi");
const bluebird = require("bluebird");
const joiValidate = bluebird.promisify(joi.validate);
const redisSchema = joi.object().keys({
    host: joi.string().optional().default('127.0.0.1'),
    port: joi.number().integer().optional().default(6379),
    family: joi.number().integer().optional().valid([4, 6]).default(4),
    password: joi.string().optional(),
    db: joi.number().integer().optional().default(0)
}).optional();
function initializeClient(redisConf) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let validated = yield joiValidate(redisConf, redisSchema);
            exports.redisInstance = new ioredis(validated);
            console.log('init redis success');
        }
        catch (err) {
            console.log('init redis 异常: ', err);
        }
    });
}
exports.initializeClient = initializeClient;
//# sourceMappingURL=redisClient.js.map