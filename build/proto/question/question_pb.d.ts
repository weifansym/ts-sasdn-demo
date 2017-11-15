// package: question
// file: question/question.proto

import * as jspb from "google-protobuf";

export class Question extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getAnswera(): string;
    setAnswera(value: string): void;

    getAnswerb(): string;
    setAnswerb(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getTrueanswer(): string;
    setTrueanswer(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Question.AsObject;
    static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Question;
    static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
    export type AsObject = {
        id: string,
        title: string,
        answera: string,
        answerb: string,
        score: number,
        trueanswer: string,
    }
}

export class CreateQuestionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getAnswera(): string;
    setAnswera(value: string): void;

    getAnswerb(): string;
    setAnswerb(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getTrueanswer(): string;
    setTrueanswer(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateQuestionRequest): CreateQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateQuestionRequest;
    static deserializeBinaryFromReader(message: CreateQuestionRequest, reader: jspb.BinaryReader): CreateQuestionRequest;
}

export namespace CreateQuestionRequest {
    export type AsObject = {
        id: string,
        title: string,
        answera: string,
        answerb: string,
        score: number,
        trueanswer: string,
    }
}

export class CreateQuestionResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearDataList(): void;
    getDataList(): Array<Question>;
    setDataList(value: Array<Question>): void;
    addData(value?: Question, index?: number): Question;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateQuestionResponse): CreateQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateQuestionResponse;
    static deserializeBinaryFromReader(message: CreateQuestionResponse, reader: jspb.BinaryReader): CreateQuestionResponse;
}

export namespace CreateQuestionResponse {
    export type AsObject = {
        code: number,
        message: string,
        dataList: Array<Question.AsObject>,
    }
}

export class UpdateQuestionRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateQuestionRequest): UpdateQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateQuestionRequest;
    static deserializeBinaryFromReader(message: UpdateQuestionRequest, reader: jspb.BinaryReader): UpdateQuestionRequest;
}

export namespace UpdateQuestionRequest {
    export type AsObject = {
        title: string,
    }
}

export class UpdateQuestionResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearDataList(): void;
    getDataList(): Array<Question>;
    setDataList(value: Array<Question>): void;
    addData(value?: Question, index?: number): Question;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateQuestionResponse): UpdateQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateQuestionResponse;
    static deserializeBinaryFromReader(message: UpdateQuestionResponse, reader: jspb.BinaryReader): UpdateQuestionResponse;
}

export namespace UpdateQuestionResponse {
    export type AsObject = {
        code: number,
        message: string,
        dataList: Array<Question.AsObject>,
    }
}

export class DeleteQuestionRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteQuestionRequest): DeleteQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteQuestionRequest;
    static deserializeBinaryFromReader(message: DeleteQuestionRequest, reader: jspb.BinaryReader): DeleteQuestionRequest;
}

export namespace DeleteQuestionRequest {
    export type AsObject = {
        title: string,
    }
}

export class DeleteQuestionResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearDataList(): void;
    getDataList(): Array<Question>;
    setDataList(value: Array<Question>): void;
    addData(value?: Question, index?: number): Question;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteQuestionResponse): DeleteQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteQuestionResponse;
    static deserializeBinaryFromReader(message: DeleteQuestionResponse, reader: jspb.BinaryReader): DeleteQuestionResponse;
}

export namespace DeleteQuestionResponse {
    export type AsObject = {
        code: number,
        message: string,
        dataList: Array<Question.AsObject>,
    }
}

export class QuestionListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionListRequest): QuestionListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionListRequest;
    static deserializeBinaryFromReader(message: QuestionListRequest, reader: jspb.BinaryReader): QuestionListRequest;
}

export namespace QuestionListRequest {
    export type AsObject = {
    }
}

export class QuestionListResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearDataList(): void;
    getDataList(): Array<Question>;
    setDataList(value: Array<Question>): void;
    addData(value?: Question, index?: number): Question;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionListResponse): QuestionListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionListResponse;
    static deserializeBinaryFromReader(message: QuestionListResponse, reader: jspb.BinaryReader): QuestionListResponse;
}

export namespace QuestionListResponse {
    export type AsObject = {
        code: number,
        message: string,
        dataList: Array<Question.AsObject>,
    }
}
