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
class PostCreateQuestion extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/createQuestion';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    id: {
                        type: 'string',
                        required: false,
                    },
                    title: {
                        type: 'string',
                        required: false,
                    },
                    answerA: {
                        type: 'string',
                        required: false,
                    },
                    answerB: {
                        type: 'string',
                        required: false,
                    },
                    score: {
                        type: 'number',
                        required: false,
                    },
                    trueAnswer: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            // let orderObj = {'name': 'yu1111'}
            // return Promise.resolve(orderObj);
            let response = yield questionLogic_1.questionLogic.createQuestion(ctx, next, params)
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
exports.api = new PostCreateQuestion();
//# sourceMappingURL=postCreateQuestion.js.map