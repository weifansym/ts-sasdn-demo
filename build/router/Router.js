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
const Router = require("koa-router");
const API_PATHS = [
    '../router/user/UserService/postDeleteUserInfo',
    '../router/user/UserService/postGetUserInfo',
    '../router/user/UserService/postGetUserList',
    '../router/user/UserService/postsetUserInfo',
    '../router/question/QuestionService/postCreateQuestion',
    '../router/question/QuestionService/postDeleteQuestion',
    '../router/question/QuestionService/postQuestionList',
    '../router/question/QuestionService/postUpdateQuestion',
];
class RouteLoader {
    constructor() {
        this._initialized = false;
        this._router = new Router();
    }
    static instance() {
        if (RouteLoader._instance === undefined) {
            RouteLoader._instance = new RouteLoader();
        }
        return RouteLoader._instance;
    }
    init() {
        return new Promise((resolve, reject) => {
            // create koa-router
            let queue = [];
            for (let path of API_PATHS) {
                queue.push(this._createRouter(path));
            }
            // promise queue
            Promise.all(queue).then(() => {
                this._initialized = true;
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    getRouter() {
        return this._router;
    }
    _createRouter(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let api = require(path).api;
                this._router[api.method].apply(this._router, api.register());
            }
            catch (err) {
                console.error(err.toString());
            }
        });
    }
}
exports.default = RouteLoader;
//# sourceMappingURL=Router.js.map