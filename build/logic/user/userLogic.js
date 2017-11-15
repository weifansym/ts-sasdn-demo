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
const fs = require("fs");
const user_pb = require("../../proto/user/user_pb");
const redisLogic = require("../common/redisLogic");
let filePath = './configs/user.json'; //json文件路径
let readFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
const userList = [{ name: "xiaoming", age: 100 }, { name: "lw", age: 18 }];
var userLogic;
(function (userLogic) {
    function getUserInfo(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            const queryString = 'sasdn:test11';
            const userData = JSON.stringify(userList);
            yield redisLogic.cacheInstance.setStr(queryString, userData);
            let userInfo = yield redisLogic.cacheInstance.getStr(queryString);
            userInfo = JSON.parse(userInfo);
            //  response
            const response = new user_pb.GetUserInfoResponse();
            userInfo.forEach((item) => {
                if (item.name === params.body.name) {
                    response.setName(item.name);
                    response.setAge(item.age);
                }
            });
            const name = response.getName();
            return Promise.resolve(response);
        });
    }
    userLogic.getUserInfo = getUserInfo;
    function getUserList(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            const queryString = 'sasdn:test11';
            let userInfo = yield redisLogic.cacheInstance.getStr(queryString);
            console.log('userInfo: ', userInfo);
            userInfo = JSON.parse(userInfo);
            /*userInfo
            userInfo.forEach((item) => {
                let
            })*/
            console.log('userInfoArray: ', userInfo);
            //  response
            /*const response = new user_pb.GetUserListResponse();
            response.setUserlistList(userInfo);*/
            return Promise.resolve(userInfo);
        });
    }
    userLogic.getUserList = getUserList;
})(userLogic = exports.userLogic || (exports.userLogic = {}));
//# sourceMappingURL=userLogic.js.map