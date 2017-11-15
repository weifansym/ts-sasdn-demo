// package: question
// file: question/question.proto

import * as grpc from "grpc";
import * as question_question_pb from "../question/question_pb";

interface IQuestionServiceService extends grpc.IMethodsMap {
    createQuestion: ICreateQuestion;
    updateQuestion: IUpdateQuestion;
    deleteQuestion: IDeleteQuestion;
    questionList: IQuestionList;
}

interface ICreateQuestion {
    path: string; // "/question.QuestionService/CreateQuestion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: question_question_pb.CreateQuestionRequest,
    responseType: question_question_pb.CreateQuestionResponse,
    requestSerialize: (arg: question_question_pb.CreateQuestionRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => question_question_pb.CreateQuestionRequest;
    responseSerialize: (arg: question_question_pb.CreateQuestionResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => question_question_pb.CreateQuestionResponse;
}
interface IUpdateQuestion {
    path: string; // "/question.QuestionService/UpdateQuestion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: question_question_pb.UpdateQuestionRequest,
    responseType: question_question_pb.UpdateQuestionResponse,
    requestSerialize: (arg: question_question_pb.UpdateQuestionRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => question_question_pb.UpdateQuestionRequest;
    responseSerialize: (arg: question_question_pb.UpdateQuestionResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => question_question_pb.UpdateQuestionResponse;
}
interface IDeleteQuestion {
    path: string; // "/question.QuestionService/DeleteQuestion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: question_question_pb.DeleteQuestionRequest,
    responseType: question_question_pb.DeleteQuestionResponse,
    requestSerialize: (arg: question_question_pb.DeleteQuestionRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => question_question_pb.DeleteQuestionRequest;
    responseSerialize: (arg: question_question_pb.DeleteQuestionResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => question_question_pb.DeleteQuestionResponse;
}
interface IQuestionList {
    path: string; // "/question.QuestionService/QuestionList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: question_question_pb.QuestionListRequest,
    responseType: question_question_pb.QuestionListResponse,
    requestSerialize: (arg: question_question_pb.QuestionListRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => question_question_pb.QuestionListRequest;
    responseSerialize: (arg: question_question_pb.QuestionListResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => question_question_pb.QuestionListResponse;
}

export const QuestionServiceService: IQuestionServiceService;
export class QuestionServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    createQuestion(request: question_question_pb.CreateQuestionRequest, callback: (error: Error | null, response: question_question_pb.CreateQuestionResponse) => void): grpc.ClientUnaryCall;
    createQuestion(request: question_question_pb.CreateQuestionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: question_question_pb.CreateQuestionResponse) => void): grpc.ClientUnaryCall;
    updateQuestion(request: question_question_pb.UpdateQuestionRequest, callback: (error: Error | null, response: question_question_pb.UpdateQuestionResponse) => void): grpc.ClientUnaryCall;
    updateQuestion(request: question_question_pb.UpdateQuestionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: question_question_pb.UpdateQuestionResponse) => void): grpc.ClientUnaryCall;
    deleteQuestion(request: question_question_pb.DeleteQuestionRequest, callback: (error: Error | null, response: question_question_pb.DeleteQuestionResponse) => void): grpc.ClientUnaryCall;
    deleteQuestion(request: question_question_pb.DeleteQuestionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: question_question_pb.DeleteQuestionResponse) => void): grpc.ClientUnaryCall;
    questionList(request: question_question_pb.QuestionListRequest, callback: (error: Error | null, response: question_question_pb.QuestionListResponse) => void): grpc.ClientUnaryCall;
    questionList(request: question_question_pb.QuestionListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: question_question_pb.QuestionListResponse) => void): grpc.ClientUnaryCall;
}
