import {GatewayContext, MiddlewareNext} from "sasdn";
import * as fs from 'fs';
import * as user_pb from "../../proto/user/user_pb";
import * as redisLogic from '../common/redisLogic'


interface GetUserInfoRequestParams {
    body: user_pb.GetUserInfoRequest.AsObject;
}

interface GetUserListRequestParams {
    body: user_pb.GetUserListRequest.AsObject;
}


let filePath = './configs/user.json' //json文件路径

let readFromFile = () => {  //读文件函数
    return new Promise((resolve, reject) => { //封装成Promise对象
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const userList: user_pb.User.AsObject[] = [{name: "xiaoming", age: 100}, {name: "lw", age: 18}];

export namespace userLogic {

    export async function getUserInfo(ctx: GatewayContext, next?: MiddlewareNext, params?: GetUserInfoRequestParams): Promise<user_pb.GetUserInfoResponse> {
        if (ctx === null) {
            throw new Error('koa context is null');
        }
        const queryString: string = 'sasdn:test11';
        const userData: string = JSON.stringify(userList);

        await redisLogic.cacheInstance.setStr(queryString, userData);

        let userInfo: any = await redisLogic.cacheInstance.getStr(queryString);
        userInfo = JSON.parse(userInfo);

        //  response
        const response = new user_pb.GetUserInfoResponse();

        userInfo.forEach((item) => {
            if (item.name === params.body.name) {
                response.setName(item.name)
                response.setAge(item.age)
            }
        })
        const name = response.getName();
        return Promise.resolve(response);
    }

    export async function getUserList(ctx: GatewayContext, next?: MiddlewareNext, params?: GetUserListRequestParams): Promise<any> {
        if (ctx === null) {
            throw new Error('koa context is null');
        }
        const queryString: string = 'sasdn:test11';
        let userInfo: any = await redisLogic.cacheInstance.getStr(queryString);
        console.log('userInfo: ', userInfo)
        userInfo = JSON.parse(userInfo) as Array<user_pb.User>;
        /*userInfo
        userInfo.forEach((item) => {
            let
        })*/
        console.log('userInfoArray: ', userInfo)
        //  response
        /*const response = new user_pb.GetUserListResponse();
        response.setUserlistList(userInfo);*/

        return Promise.resolve(userInfo);
    }


}