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
const user_pb_1 = require("../../../proto/user/user_pb");
const userLogic_1 = require("../../../logic/user/userLogic");
const Exception_1 = require("../../../lib/Exception");
class PostGetUserInfo extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/getUserInfo';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    name: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[Gateway] /v1/user/getUserInfo, params: ${JSON.stringify(params)}`);
            let response;
            if (process.env.NODE_ENV === 'development' && params.body.hasOwnProperty('mock') && params.body['mock'] == 1) {
                response = yield this.handleMock(ctx, next, params);
            }
            else {
                response = yield userLogic_1.userLogic.getUserInfo(ctx, next, params)
                    .then((response) => {
                    console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
                    return response.toObject();
                }).catch((err) => {
                    console.log(`[Gateway] /v1/user/getUserInfo, error: ${err.message}`);
                    return Exception_1.Exception.parseErrorMsg(err);
                });
            }
            return Promise.resolve(response);
        });
    }
    handleMock(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new user_pb_1.GetUserInfoResponse();
            response.setName("mockUserName");
            response.setAge(11);
            return Promise.resolve(response.toObject());
        });
    }
}
exports.api = new PostGetUserInfo();
//# sourceMappingURL=postGetUserInfo.js.map