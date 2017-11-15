import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {GetUserListResponse, GetUserListRequest, User} from "../../../proto/user/user_pb";
import { userLogic } from "../../../logic/user/userLogic";
import {Exception} from '../../../lib/Exception';

interface RequestParams {
    body: GetUserListRequest.AsObject;
}

class PostGetUserList extends GatewayApiBase {
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<GetUserListResponse.AsObject> {
        console.log(`[Gateway] /v1/user/getUserInfo, params: ${JSON.stringify(params)}`);
        let response = await userLogic.getUserList(ctx, next, params)
            .then((userList) => {
                console.log(`[Gateway] /v1/user/getUserInfo, response: ${JSON.stringify(userList)}`);
                return userList;
            }).catch((err) => {
                console.log(`[Gateway] /v1/user/getUserInfo, error: ${err.message}`);
                return Exception.parseErrorMsg(err);
            });
        return Promise.resolve(response);
    }
}

export const api = new PostGetUserList();