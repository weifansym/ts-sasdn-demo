// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_user_pb = require('../user/user_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_user_DeleteUserInfoRequest(arg) {
  if (!(arg instanceof user_user_pb.DeleteUserInfoRequest)) {
    throw new Error('Expected argument of type user.DeleteUserInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_DeleteUserInfoRequest(buffer_arg) {
  return user_user_pb.DeleteUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserInfoResponse(arg) {
  if (!(arg instanceof user_user_pb.DeleteUserInfoResponse)) {
    throw new Error('Expected argument of type user.DeleteUserInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_DeleteUserInfoResponse(buffer_arg) {
  return user_user_pb.DeleteUserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserInfoRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserInfoRequest)) {
    throw new Error('Expected argument of type user.GetUserInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserInfoRequest(buffer_arg) {
  return user_user_pb.GetUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserInfoResponse(arg) {
  if (!(arg instanceof user_user_pb.GetUserInfoResponse)) {
    throw new Error('Expected argument of type user.GetUserInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserInfoResponse(buffer_arg) {
  return user_user_pb.GetUserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserListRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserListRequest)) {
    throw new Error('Expected argument of type user.GetUserListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserListRequest(buffer_arg) {
  return user_user_pb.GetUserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserListResponse(arg) {
  if (!(arg instanceof user_user_pb.GetUserListResponse)) {
    throw new Error('Expected argument of type user.GetUserListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserListResponse(buffer_arg) {
  return user_user_pb.GetUserListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_setUserInfoRequest(arg) {
  if (!(arg instanceof user_user_pb.setUserInfoRequest)) {
    throw new Error('Expected argument of type user.setUserInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_setUserInfoRequest(buffer_arg) {
  return user_user_pb.setUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_setUserInfoResponse(arg) {
  if (!(arg instanceof user_user_pb.setUserInfoResponse)) {
    throw new Error('Expected argument of type user.setUserInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_setUserInfoResponse(buffer_arg) {
  return user_user_pb.setUserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUserList: {
    path: '/user.UserService/GetUserList',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserListRequest,
    responseType: user_user_pb.GetUserListResponse,
    requestSerialize: serialize_user_GetUserListRequest,
    requestDeserialize: deserialize_user_GetUserListRequest,
    responseSerialize: serialize_user_GetUserListResponse,
    responseDeserialize: deserialize_user_GetUserListResponse,
  },
  getUserInfo: {
    path: '/user.UserService/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserInfoRequest,
    responseType: user_user_pb.GetUserInfoResponse,
    requestSerialize: serialize_user_GetUserInfoRequest,
    requestDeserialize: deserialize_user_GetUserInfoRequest,
    responseSerialize: serialize_user_GetUserInfoResponse,
    responseDeserialize: deserialize_user_GetUserInfoResponse,
  },
  setUserInfo: {
    path: '/user.UserService/setUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.setUserInfoRequest,
    responseType: user_user_pb.setUserInfoResponse,
    requestSerialize: serialize_user_setUserInfoRequest,
    requestDeserialize: deserialize_user_setUserInfoRequest,
    responseSerialize: serialize_user_setUserInfoResponse,
    responseDeserialize: deserialize_user_setUserInfoResponse,
  },
  deleteUserInfo: {
    path: '/user.UserService/DeleteUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.DeleteUserInfoRequest,
    responseType: user_user_pb.DeleteUserInfoResponse,
    requestSerialize: serialize_user_DeleteUserInfoRequest,
    requestDeserialize: deserialize_user_DeleteUserInfoRequest,
    responseSerialize: serialize_user_DeleteUserInfoResponse,
    responseDeserialize: deserialize_user_DeleteUserInfoResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
