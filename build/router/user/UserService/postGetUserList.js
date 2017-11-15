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
const sasdn_1 = require("sasdn");
const userLogic_1 = require("../../../logic/user/userLogic");
const Exception_1 = require("../../../lib/Exception");
class PostGetUserList extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/getUserList';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[Gateway] /v1/user/getUserInfo, params: ${JSON.stringify(params)}`);
            let response = yield userLogic_1.userLogic.getUserList(ctx, next, params)
                .then((userList) => {
                console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(userList)}`);
                return userList;
            }).catch((err) => {
                console.log(`[Gateway] /v1/user/getUserInfo, error: ${err.message}`);
                return Exception_1.Exception.parseErrorMsg(err);
            });
            return Promise.resolve(response);
        });
    }
}
exports.api = new PostGetUserList();
//# sourceMappingURL=postGetUserList.js.map