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
class PostsetUserInfo extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/setUserInfo';
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
                    age: {
                        type: 'number',
                        required: false,
                    },
                },
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve((new user_pb_1.setUserInfoResponse()).toObject());
        });
    }
}
exports.api = new PostsetUserInfo();
//# sourceMappingURL=postsetUserInfo.js.map