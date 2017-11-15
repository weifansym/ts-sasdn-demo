import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {GetUserInfoResponse, GetUserInfoRequest, User} from "../../../proto/user/user_pb";
import { userLogic } from "../../../logic/user/userLogic";
import {Exception} from '../../../lib/Exception';


interface RequestParams {
    body: GetUserInfoRequest.AsObject;
}

class PostGetUserInfo extends GatewayApiBase {
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<GetUserInfoResponse.AsObject> {
        console.log(`[Gateway] /v1/user/getUserInfo, params: ${JSON.stringify(params)}`);
        let response: GetUserInfoResponse.AsObject;
        if (process.env.NODE_ENV === 'development' && params.body.hasOwnProperty('mock') && params.body['mock'] == 1) {
            response = await this.handleMock(ctx, next, params);
        } else {
            response = await userLogic.getUserInfo(ctx, next, params)
                .then((response) => {
                    console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(response)}`);
                    return response.toObject();
                }).catch((err) => {
                    console.log(`[Gateway] /v1/user/getUserInfo, error: ${err.message}`);
                    return Exception.parseErrorMsg(err);
                });
        }



        return Promise.resolve(response);
    }

    public async handleMock(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<GetUserInfoResponse.AsObject> {
        const response = new GetUserInfoResponse();
        response.setName("mockUserName");
        response.setAge(11);
        return Promise.resolve(response.toObject());
    }
}

export const api = new PostGetUserInfo();