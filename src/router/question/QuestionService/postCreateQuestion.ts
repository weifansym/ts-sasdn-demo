import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {CreateQuestionResponse, CreateQuestionRequest, } from "../../../proto/question/question_pb";
import {questionLogic} from "../../../logic/question/questionLogic"
interface RequestParams {
    body: CreateQuestionRequest.AsObject;
}

class PostCreateQuestion extends GatewayApiBase {
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<CreateQuestionResponse.AsObject> {
        // let orderObj = {'name': 'yu1111'}
        // return Promise.resolve(orderObj);
        let response: any = await questionLogic.createQuestion(ctx, next, params)
        .then((response) => {
            console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
            return response.toObject();
        }).catch((err) => {
            console.log(`[Gateway error!] /v1/user/getUserInfo, error: ${err.message}`);
        });
        return Promise.resolve(response);
    }
}

export const api = new PostCreateQuestion();