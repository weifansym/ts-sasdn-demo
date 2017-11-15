import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {QuestionListResponse, QuestionListRequest, } from "../../../proto/question/question_pb";
import {questionLogic} from "../../../logic/question/questionLogic"
interface RequestParams {
    body: QuestionListRequest.AsObject;
}

class PostQuestionList extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/questionList';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
            },
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<QuestionListResponse.AsObject> {
        let response: any = await questionLogic.questionList(ctx, next, params)
        .then((response) => {
            console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
            return response.toObject();
        }).catch((err) => {
            console.log(`[Gateway error!] /v1/user/getUserInfo, error: ${err.message}`);
        });
        return Promise.resolve(response);
    }
}

export const api = new PostQuestionList();