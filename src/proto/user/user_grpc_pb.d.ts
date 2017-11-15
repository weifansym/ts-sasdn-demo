// package: user
// file: user/user.proto

import * as grpc from "grpc";
import * as user_user_pb from "../user/user_pb";

interface IUserServiceService extends grpc.IMethodsMap {
    getUserList: IGetUserList;
    getUserInfo: IGetUserInfo;
    setUserInfo: IsetUserInfo;
    deleteUserInfo: IDeleteUserInfo;
}

interface IGetUserList {
    path: string; // "/user.UserService/GetUserList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: user_user_pb.GetUserListRequest,
    responseType: user_user_pb.GetUserListResponse,
    requestSerialize: (arg: user_user_pb.GetUserListRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserListRequest;
    responseSerialize: (arg: user_user_pb.GetUserListResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserListResponse;
}
interface IGetUserInfo {
    path: string; // "/user.UserService/GetUserInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: user_user_pb.GetUserInfoRequest,
    responseType: user_user_pb.GetUserInfoResponse,
    requestSerialize: (arg: user_user_pb.GetUserInfoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserInfoRequest;
    responseSerialize: (arg: user_user_pb.GetUserInfoResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserInfoResponse;
}
interface IsetUserInfo {
    path: string; // "/user.UserService/setUserInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: user_user_pb.setUserInfoRequest,
    responseType: user_user_pb.setUserInfoResponse,
    requestSerialize: (arg: user_user_pb.setUserInfoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => user_user_pb.setUserInfoRequest;
    responseSerialize: (arg: user_user_pb.setUserInfoResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => user_user_pb.setUserInfoResponse;
}
interface IDeleteUserInfo {
    path: string; // "/user.UserService/DeleteUserInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: user_user_pb.DeleteUserInfoRequest,
    responseType: user_user_pb.DeleteUserInfoResponse,
    requestSerialize: (arg: user_user_pb.DeleteUserInfoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => user_user_pb.DeleteUserInfoRequest;
    responseSerialize: (arg: user_user_pb.DeleteUserInfoResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => user_user_pb.DeleteUserInfoResponse;
}

export const UserServiceService: IUserServiceService;
export class UserServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getUserList(request: user_user_pb.GetUserListRequest, callback: (error: Error | null, response: user_user_pb.GetUserListResponse) => void): grpc.ClientUnaryCall;
    getUserList(request: user_user_pb.GetUserListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.GetUserListResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: user_user_pb.GetUserInfoRequest, callback: (error: Error | null, response: user_user_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: user_user_pb.GetUserInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    setUserInfo(request: user_user_pb.setUserInfoRequest, callback: (error: Error | null, response: user_user_pb.setUserInfoResponse) => void): grpc.ClientUnaryCall;
    setUserInfo(request: user_user_pb.setUserInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.setUserInfoResponse) => void): grpc.ClientUnaryCall;
    deleteUserInfo(request: user_user_pb.DeleteUserInfoRequest, callback: (error: Error | null, response: user_user_pb.DeleteUserInfoResponse) => void): grpc.ClientUnaryCall;
    deleteUserInfo(request: user_user_pb.DeleteUserInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.DeleteUserInfoResponse) => void): grpc.ClientUnaryCall;
}
