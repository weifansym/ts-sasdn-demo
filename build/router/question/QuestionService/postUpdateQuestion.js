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
const questionLogic_1 = require("../../../logic/question/questionLogic");
class PostUpdateQuestion extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/updateQuestion';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    title: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield questionLogic_1.questionLogic.updateQuestion(ctx, next, params)
                .then((response) => {
                console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
                return response.toObject();
            }).catch((err) => {
                console.log(`[Gateway error!] /v1/user/getUserInfo, error: ${err.message}`);
            });
            return Promise.resolve(response);
        });
    }
}
exports.api = new PostUpdateQuestion();
//# sourceMappingURL=postUpdateQuestion.js.map