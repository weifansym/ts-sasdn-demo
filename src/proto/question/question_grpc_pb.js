// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var question_question_pb = require('../question/question_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_question_CreateQuestionRequest(arg) {
  if (!(arg instanceof question_question_pb.CreateQuestionRequest)) {
    throw new Error('Expected argument of type question.CreateQuestionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_CreateQuestionRequest(buffer_arg) {
  return question_question_pb.CreateQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_CreateQuestionResponse(arg) {
  if (!(arg instanceof question_question_pb.CreateQuestionResponse)) {
    throw new Error('Expected argument of type question.CreateQuestionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_CreateQuestionResponse(buffer_arg) {
  return question_question_pb.CreateQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_DeleteQuestionRequest(arg) {
  if (!(arg instanceof question_question_pb.DeleteQuestionRequest)) {
    throw new Error('Expected argument of type question.DeleteQuestionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_DeleteQuestionRequest(buffer_arg) {
  return question_question_pb.DeleteQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_DeleteQuestionResponse(arg) {
  if (!(arg instanceof question_question_pb.DeleteQuestionResponse)) {
    throw new Error('Expected argument of type question.DeleteQuestionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_DeleteQuestionResponse(buffer_arg) {
  return question_question_pb.DeleteQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_QuestionListRequest(arg) {
  if (!(arg instanceof question_question_pb.QuestionListRequest)) {
    throw new Error('Expected argument of type question.QuestionListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_QuestionListRequest(buffer_arg) {
  return question_question_pb.QuestionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_QuestionListResponse(arg) {
  if (!(arg instanceof question_question_pb.QuestionListResponse)) {
    throw new Error('Expected argument of type question.QuestionListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_QuestionListResponse(buffer_arg) {
  return question_question_pb.QuestionListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_UpdateQuestionRequest(arg) {
  if (!(arg instanceof question_question_pb.UpdateQuestionRequest)) {
    throw new Error('Expected argument of type question.UpdateQuestionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_UpdateQuestionRequest(buffer_arg) {
  return question_question_pb.UpdateQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_UpdateQuestionResponse(arg) {
  if (!(arg instanceof question_question_pb.UpdateQuestionResponse)) {
    throw new Error('Expected argument of type question.UpdateQuestionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_question_UpdateQuestionResponse(buffer_arg) {
  return question_question_pb.UpdateQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QuestionServiceService = exports.QuestionServiceService = {
  createQuestion: {
    path: '/question.QuestionService/CreateQuestion',
    requestStream: false,
    responseStream: false,
    requestType: question_question_pb.CreateQuestionRequest,
    responseType: question_question_pb.CreateQuestionResponse,
    requestSerialize: serialize_question_CreateQuestionRequest,
    requestDeserialize: deserialize_question_CreateQuestionRequest,
    responseSerialize: serialize_question_CreateQuestionResponse,
    responseDeserialize: deserialize_question_CreateQuestionResponse,
  },
  updateQuestion: {
    path: '/question.QuestionService/UpdateQuestion',
    requestStream: false,
    responseStream: false,
    requestType: question_question_pb.UpdateQuestionRequest,
    responseType: question_question_pb.UpdateQuestionResponse,
    requestSerialize: serialize_question_UpdateQuestionRequest,
    requestDeserialize: deserialize_question_UpdateQuestionRequest,
    responseSerialize: serialize_question_UpdateQuestionResponse,
    responseDeserialize: deserialize_question_UpdateQuestionResponse,
  },
  deleteQuestion: {
    path: '/question.QuestionService/DeleteQuestion',
    requestStream: false,
    responseStream: false,
    requestType: question_question_pb.DeleteQuestionRequest,
    responseType: question_question_pb.DeleteQuestionResponse,
    requestSerialize: serialize_question_DeleteQuestionRequest,
    requestDeserialize: deserialize_question_DeleteQuestionRequest,
    responseSerialize: serialize_question_DeleteQuestionResponse,
    responseDeserialize: deserialize_question_DeleteQuestionResponse,
  },
  questionList: {
    path: '/question.QuestionService/QuestionList',
    requestStream: false,
    responseStream: false,
    requestType: question_question_pb.QuestionListRequest,
    responseType: question_question_pb.QuestionListResponse,
    requestSerialize: serialize_question_QuestionListRequest,
    requestDeserialize: deserialize_question_QuestionListRequest,
    responseSerialize: serialize_question_QuestionListResponse,
    responseDeserialize: deserialize_question_QuestionListResponse,
  },
};

exports.QuestionServiceClient = grpc.makeGenericClientConstructor(QuestionServiceService);
