import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {UpdateQuestionResponse, UpdateQuestionRequest, } from "../../../proto/question/question_pb";
import {questionLogic} from "../../../logic/question/questionLogic"
interface RequestParams {
    body: UpdateQuestionRequest.AsObject;
}

class PostUpdateQuestion extends GatewayApiBase {
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<UpdateQuestionResponse.AsObject> {
        let response: any = await questionLogic.updateQuestion(ctx, next, params)
        .then((response) => {
            console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
            return response.toObject();
        }).catch((err) => {
            console.log(`[Gateway error!] /v1/user/getUserInfo, error: ${err.message}`);
        });
        return Promise.resolve(response);
    }
}

export const api = new PostUpdateQuestion();