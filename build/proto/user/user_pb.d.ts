// package: user
// file: user/user.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class GetUserListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserListRequest): GetUserListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserListRequest;
    static deserializeBinaryFromReader(message: GetUserListRequest, reader: jspb.BinaryReader): GetUserListRequest;
}

export namespace GetUserListRequest {
    export type AsObject = {
    }
}

export class GetUserListResponse extends jspb.Message { 
    clearUserlistList(): void;
    getUserlistList(): Array<User>;
    setUserlistList(value: Array<User>): void;
    addUserlist(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserListResponse): GetUserListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserListResponse;
    static deserializeBinaryFromReader(message: GetUserListResponse, reader: jspb.BinaryReader): GetUserListResponse;
}

export namespace GetUserListResponse {
    export type AsObject = {
        userlistList: Array<User.AsObject>,
    }
}

export class GetUserInfoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInfoRequest): GetUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInfoRequest;
    static deserializeBinaryFromReader(message: GetUserInfoRequest, reader: jspb.BinaryReader): GetUserInfoRequest;
}

export namespace GetUserInfoRequest {
    export type AsObject = {
        name: string,
    }
}

export class GetUserInfoResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInfoResponse;
    static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class setUserInfoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): setUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: setUserInfoRequest): setUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: setUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): setUserInfoRequest;
    static deserializeBinaryFromReader(message: setUserInfoRequest, reader: jspb.BinaryReader): setUserInfoRequest;
}

export namespace setUserInfoRequest {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class setUserInfoResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): setUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: setUserInfoResponse): setUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: setUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): setUserInfoResponse;
    static deserializeBinaryFromReader(message: setUserInfoResponse, reader: jspb.BinaryReader): setUserInfoResponse;
}

export namespace setUserInfoResponse {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class DeleteUserInfoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserInfoRequest): DeleteUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserInfoRequest;
    static deserializeBinaryFromReader(message: DeleteUserInfoRequest, reader: jspb.BinaryReader): DeleteUserInfoRequest;
}

export namespace DeleteUserInfoRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteUserInfoResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserInfoResponse): DeleteUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserInfoResponse;
    static deserializeBinaryFromReader(message: DeleteUserInfoResponse, reader: jspb.BinaryReader): DeleteUserInfoResponse;
}

export namespace DeleteUserInfoResponse {
    export type AsObject = {
        name: string,
    }
}
