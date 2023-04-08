/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.1
// source: unit.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var empty_pb = require('./empty_pb.js')

var lesson_pb = require('./lesson_pb.js')
const proto = {};
proto.pb = require('./unit_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.UnitServiceClient =
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
proto.pb.UnitServicePromiseClient =
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
 *   !proto.pb.CreateUnitRequest,
 *   !proto.pb.Unit>}
 */
const methodDescriptor_UnitService_Create = new grpc.web.MethodDescriptor(
  '/pb.UnitService/Create',
  grpc.web.MethodType.UNARY,
  proto.pb.CreateUnitRequest,
  proto.pb.Unit,
  /**
   * @param {!proto.pb.CreateUnitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Unit.deserializeBinary
);


/**
 * @param {!proto.pb.CreateUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Unit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Unit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/Create',
      request,
      metadata || {},
      methodDescriptor_UnitService_Create,
      callback);
};


/**
 * @param {!proto.pb.CreateUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Unit>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/Create',
      request,
      metadata || {},
      methodDescriptor_UnitService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetUnitRequest,
 *   !proto.pb.Unit>}
 */
const methodDescriptor_UnitService_Get = new grpc.web.MethodDescriptor(
  '/pb.UnitService/Get',
  grpc.web.MethodType.UNARY,
  proto.pb.GetUnitRequest,
  proto.pb.Unit,
  /**
   * @param {!proto.pb.GetUnitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Unit.deserializeBinary
);


/**
 * @param {!proto.pb.GetUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Unit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Unit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/Get',
      request,
      metadata || {},
      methodDescriptor_UnitService_Get,
      callback);
};


/**
 * @param {!proto.pb.GetUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Unit>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/Get',
      request,
      metadata || {},
      methodDescriptor_UnitService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.UpdateUnitRequest,
 *   !proto.pb.Unit>}
 */
const methodDescriptor_UnitService_Update = new grpc.web.MethodDescriptor(
  '/pb.UnitService/Update',
  grpc.web.MethodType.UNARY,
  proto.pb.UpdateUnitRequest,
  proto.pb.Unit,
  /**
   * @param {!proto.pb.UpdateUnitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Unit.deserializeBinary
);


/**
 * @param {!proto.pb.UpdateUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Unit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Unit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/Update',
      request,
      metadata || {},
      methodDescriptor_UnitService_Update,
      callback);
};


/**
 * @param {!proto.pb.UpdateUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Unit>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/Update',
      request,
      metadata || {},
      methodDescriptor_UnitService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.DeleteUnitRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_UnitService_Delete = new grpc.web.MethodDescriptor(
  '/pb.UnitService/Delete',
  grpc.web.MethodType.UNARY,
  proto.pb.DeleteUnitRequest,
  empty_pb.Empty,
  /**
   * @param {!proto.pb.DeleteUnitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.DeleteUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/Delete',
      request,
      metadata || {},
      methodDescriptor_UnitService_Delete,
      callback);
};


/**
 * @param {!proto.pb.DeleteUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/Delete',
      request,
      metadata || {},
      methodDescriptor_UnitService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.ListUnitRequest,
 *   !proto.pb.ListUnitResponse>}
 */
const methodDescriptor_UnitService_List = new grpc.web.MethodDescriptor(
  '/pb.UnitService/List',
  grpc.web.MethodType.UNARY,
  proto.pb.ListUnitRequest,
  proto.pb.ListUnitResponse,
  /**
   * @param {!proto.pb.ListUnitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ListUnitResponse.deserializeBinary
);


/**
 * @param {!proto.pb.ListUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.ListUnitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ListUnitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/List',
      request,
      metadata || {},
      methodDescriptor_UnitService_List,
      callback);
};


/**
 * @param {!proto.pb.ListUnitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ListUnitResponse>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/List',
      request,
      metadata || {},
      methodDescriptor_UnitService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.BatchCreateUnitsRequest,
 *   !proto.pb.BatchCreateUnitsResponse>}
 */
const methodDescriptor_UnitService_BatchCreate = new grpc.web.MethodDescriptor(
  '/pb.UnitService/BatchCreate',
  grpc.web.MethodType.UNARY,
  proto.pb.BatchCreateUnitsRequest,
  proto.pb.BatchCreateUnitsResponse,
  /**
   * @param {!proto.pb.BatchCreateUnitsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.BatchCreateUnitsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.BatchCreateUnitsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pb.BatchCreateUnitsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.BatchCreateUnitsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.UnitServiceClient.prototype.batchCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.UnitService/BatchCreate',
      request,
      metadata || {},
      methodDescriptor_UnitService_BatchCreate,
      callback);
};


/**
 * @param {!proto.pb.BatchCreateUnitsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.BatchCreateUnitsResponse>}
 *     Promise that resolves to the response
 */
proto.pb.UnitServicePromiseClient.prototype.batchCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.UnitService/BatchCreate',
      request,
      metadata || {},
      methodDescriptor_UnitService_BatchCreate);
};


module.exports = proto.pb;

