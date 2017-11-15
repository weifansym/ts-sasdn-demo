import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {DeleteUserInfoResponse, DeleteUserInfoRequest, } from "../../../proto/user/user_pb";

interface RequestParams {
    body: DeleteUserInfoRequest.AsObject;
}

class PostDeleteUserInfo extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/user/delUser';
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<DeleteUserInfoResponse.AsObject> {
        return Promise.resolve((new DeleteUserInfoResponse()).toObject());
    }
}

export const api = new PostDeleteUserInfo();