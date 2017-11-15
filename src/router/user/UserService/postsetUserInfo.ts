import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {setUserInfoResponse, setUserInfoRequest, } from "../../../proto/user/user_pb";

interface RequestParams {
    body: setUserInfoRequest.AsObject;
}

class PostsetUserInfo extends GatewayApiBase {
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<setUserInfoResponse.AsObject> {
        return Promise.resolve((new setUserInfoResponse()).toObject());
    }
}

export const api = new PostsetUserInfo();