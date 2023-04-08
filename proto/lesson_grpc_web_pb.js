/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.1
// source: lesson.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var empty_pb = require('./empty_pb.js')

var question_pb = require('./question_pb.js')

var guide_pb = require('./guide_pb.js')
const proto = {};
proto.pb = require('./lesson_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.LessonServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.LessonServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CreateLessonRequest,
 *   !proto.pb.Lesson>}
 */
const methodDescriptor_LessonService_Create = new grpc.web.MethodDescriptor(
  '/pb.LessonService/Create',
  grpc.web.MethodType.UNARY,
  proto.pb.CreateLessonRequest,
  proto.pb.Lesson,
  /**
   * @param {!proto.pb.CreateLessonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Lesson.deserializeBinary
);


/**
 * @param {!proto.pb.CreateLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Lesson)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Lesson>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/Create',
      request,
      metadata || {},
      methodDescriptor_LessonService_Create,
      callback);
};


/**
 * @param {!proto.pb.CreateLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Lesson>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/Create',
      request,
      metadata || {},
      methodDescriptor_LessonService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetLessonRequest,
 *   !proto.pb.Lesson>}
 */
const methodDescriptor_LessonService_Get = new grpc.web.MethodDescriptor(
  '/pb.LessonService/Get',
  grpc.web.MethodType.UNARY,
  proto.pb.GetLessonRequest,
  proto.pb.Lesson,
  /**
   * @param {!proto.pb.GetLessonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Lesson.deserializeBinary
);


/**
 * @param {!proto.pb.GetLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Lesson)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Lesson>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/Get',
      request,
      metadata || {},
      methodDescriptor_LessonService_Get,
      callback);
};


/**
 * @param {!proto.pb.GetLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Lesson>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/Get',
      request,
      metadata || {},
      methodDescriptor_LessonService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.UpdateLessonRequest,
 *   !proto.pb.Lesson>}
 */
const methodDescriptor_LessonService_Update = new grpc.web.MethodDescriptor(
  '/pb.LessonService/Update',
  grpc.web.MethodType.UNARY,
  proto.pb.UpdateLessonRequest,
  proto.pb.Lesson,
  /**
   * @param {!proto.pb.UpdateLessonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Lesson.deserializeBinary
);


/**
 * @param {!proto.pb.UpdateLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Lesson)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Lesson>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/Update',
      request,
      metadata || {},
      methodDescriptor_LessonService_Update,
      callback);
};


/**
 * @param {!proto.pb.UpdateLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Lesson>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/Update',
      request,
      metadata || {},
      methodDescriptor_LessonService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.DeleteLessonRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_LessonService_Delete = new grpc.web.MethodDescriptor(
  '/pb.LessonService/Delete',
  grpc.web.MethodType.UNARY,
  proto.pb.DeleteLessonRequest,
  empty_pb.Empty,
  /**
   * @param {!proto.pb.DeleteLessonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.DeleteLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/Delete',
      request,
      metadata || {},
      methodDescriptor_LessonService_Delete,
      callback);
};


/**
 * @param {!proto.pb.DeleteLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/Delete',
      request,
      metadata || {},
      methodDescriptor_LessonService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.ListLessonRequest,
 *   !proto.pb.ListLessonResponse>}
 */
const methodDescriptor_LessonService_List = new grpc.web.MethodDescriptor(
  '/pb.LessonService/List',
  grpc.web.MethodType.UNARY,
  proto.pb.ListLessonRequest,
  proto.pb.ListLessonResponse,
  /**
   * @param {!proto.pb.ListLessonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ListLessonResponse.deserializeBinary
);


/**
 * @param {!proto.pb.ListLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.ListLessonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ListLessonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/List',
      request,
      metadata || {},
      methodDescriptor_LessonService_List,
      callback);
};


/**
 * @param {!proto.pb.ListLessonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ListLessonResponse>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/List',
      request,
      metadata || {},
      methodDescriptor_LessonService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.BatchCreateLessonsRequest,
 *   !proto.pb.BatchCreateLessonsResponse>}
 */
const methodDescriptor_LessonService_BatchCreate = new grpc.web.MethodDescriptor(
  '/pb.LessonService/BatchCreate',
  grpc.web.MethodType.UNARY,
  proto.pb.BatchCreateLessonsRequest,
  proto.pb.BatchCreateLessonsResponse,
  /**
   * @param {!proto.pb.BatchCreateLessonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.BatchCreateLessonsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.BatchCreateLessonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.BatchCreateLessonsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.BatchCreateLessonsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.LessonServiceClient.prototype.batchCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.LessonService/BatchCreate',
      request,
      metadata || {},
      methodDescriptor_LessonService_BatchCreate,
      callback);
};


/**
 * @param {!proto.pb.BatchCreateLessonsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.BatchCreateLessonsResponse>}
 *     Promise that resolves to the response
 */
proto.pb.LessonServicePromiseClient.prototype.batchCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.LessonService/BatchCreate',
      request,
      metadata || {},
      methodDescriptor_LessonService_BatchCreate);
};


module.exports = proto.pb;
