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
const redisClient = require("../../lib/redisClient");
const msgpack = require("msgpack-lite");
class Cache {
    constructor() {
        this.variance = 10;
        this.expires = 18000; // 5 hours = 5 * 60 * 60 seconds
    }
    setStr(queryString, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const result = redisClient.redisInstance.set(queryString, data);
                resolve(result);
            });
        });
    }
    getStr(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const data = redisClient.redisInstance.get(queryString);
                resolve(data);
            });
        });
    }
    setModelHash(modelName, identity, queryString, data, expires) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.genModelKey(modelName, identity);
            return new Promise((resolve, reject) => {
                redisClient.redisInstance.pipeline()
                    .hset(key, queryString, msgpack.encode(data))
                    .expire(key, this.genExpire(expires))
                    .exec()
                    .then((results) => {
                    results.forEach((result) => {
                        if (result[0]) {
                            reject(result[0]); // err
                        }
                    });
                    resolve(data); // data itself resolved
                });
            });
        });
    }
    getModelHash(modelName, identity, queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                redisClient.redisInstance.hget(this.genModelKey(modelName, identity), queryString).then((data) => {
                    if (data !== null) {
                        data = msgpack.decode(data);
                    }
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }
    removeModelHash(modelName, identity) {
        return __awaiter(this, void 0, void 0, function* () {
            return redisClient.redisInstance.del(this.genModelKey(modelName, identity));
        });
    }
    setExpire(key, expires) {
        return __awaiter(this, void 0, void 0, function* () {
            return redisClient.redisInstance.expire(key, this.genExpire(expires));
        });
    }
    genModelKey(modelName, identity) {
        return `${modelName}:${identity}`;
    }
    genExpire(expires) {
        expires = expires || this.expires;
        const varianceMin = 0;
        const varianceMax = expires * 0.02 * this.variance;
        const varianceMinus = expires * 0.01 * this.variance;
        return Math.floor(expires + this.getRandomArbitrary(varianceMin, varianceMax) - varianceMinus);
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
exports.Cache = Cache;
exports.cacheInstance = new Cache();
//# sourceMappingURL=redisLogic.js.map