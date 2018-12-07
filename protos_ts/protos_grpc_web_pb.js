/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.protos = require('./protos_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.UsersServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.UsersServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.protos.UsersServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.protos.UsersServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetUserRequest,
 *   !proto.protos.GetUserResponse>}
 */
const methodInfo_UsersService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.GetUserResponse,
  /** @param {!proto.protos.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UsersService/GetUser',
      request,
      metadata,
      methodInfo_UsersService_GetUser,
      callback);
};


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateUserRequest,
 *   !proto.protos.CreateUserResponse>}
 */
const methodInfo_UsersService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.CreateUserResponse,
  /** @param {!proto.protos.CreateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UsersService/CreateUser',
      request,
      metadata,
      methodInfo_UsersService_CreateUser,
      callback);
};


/**
 * @param {!proto.protos.CreateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateUserRequest,
 *   !proto.protos.UpdateUserResponse>}
 */
const methodInfo_UsersService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.UpdateUserResponse,
  /** @param {!proto.protos.UpdateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UsersService/UpdateUser',
      request,
      metadata,
      methodInfo_UsersService_UpdateUser,
      callback);
};


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteUserRequest,
 *   !proto.protos.DeleteUserResponse>}
 */
const methodInfo_UsersService_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.DeleteUserResponse,
  /** @param {!proto.protos.DeleteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UsersService/DeleteUser',
      request,
      metadata,
      methodInfo_UsersService_DeleteUser,
      callback);
};


/**
 * @param {!proto.protos.DeleteUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListUsersRequest,
 *   !proto.protos.ListUsersResponse>}
 */
const methodInfo_UsersService_ListUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.ListUsersResponse,
  /** @param {!proto.protos.ListUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListUsersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServiceClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UsersService/ListUsers',
      request,
      metadata,
      methodInfo_UsersService_ListUsers,
      callback);
};


/**
 * @param {!proto.protos.ListUsersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListUsersResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.UsersServicePromiseClient.prototype.listUsers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listUsers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ReviewsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ReviewsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.protos.ReviewsServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.protos.ReviewsServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetReviewRequest,
 *   !proto.protos.GetReviewResponse>}
 */
const methodInfo_ReviewsService_GetReview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.GetReviewResponse,
  /** @param {!proto.protos.GetReviewRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.GetReviewResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetReviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetReviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.getReview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/GetReview',
      request,
      metadata,
      methodInfo_ReviewsService_GetReview,
      callback);
};


/**
 * @param {!proto.protos.GetReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetReviewResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.getReview =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getReview(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateReviewRequest,
 *   !proto.protos.CreateReviewResponse>}
 */
const methodInfo_ReviewsService_CreateReview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.CreateReviewResponse,
  /** @param {!proto.protos.CreateReviewRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.CreateReviewResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateReviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateReviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.createReview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/CreateReview',
      request,
      metadata,
      methodInfo_ReviewsService_CreateReview,
      callback);
};


/**
 * @param {!proto.protos.CreateReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateReviewResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.createReview =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createReview(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateReviewRequest,
 *   !proto.protos.UpdateReviewResponse>}
 */
const methodInfo_ReviewsService_UpdateReview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.UpdateReviewResponse,
  /** @param {!proto.protos.UpdateReviewRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.UpdateReviewResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateReviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateReviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.updateReview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/UpdateReview',
      request,
      metadata,
      methodInfo_ReviewsService_UpdateReview,
      callback);
};


/**
 * @param {!proto.protos.UpdateReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateReviewResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.updateReview =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateReview(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteReviewRequest,
 *   !proto.protos.DeleteReviewResponse>}
 */
const methodInfo_ReviewsService_DeleteReview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.DeleteReviewResponse,
  /** @param {!proto.protos.DeleteReviewRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.DeleteReviewResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteReviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteReviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.deleteReview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/DeleteReview',
      request,
      metadata,
      methodInfo_ReviewsService_DeleteReview,
      callback);
};


/**
 * @param {!proto.protos.DeleteReviewRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteReviewResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.deleteReview =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteReview(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListReviewsRequest,
 *   !proto.protos.ListReviewsResponse>}
 */
const methodInfo_ReviewsService_ListReviews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.ListReviewsResponse,
  /** @param {!proto.protos.ListReviewsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.ListReviewsResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListReviewsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListReviewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListReviewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.listReviews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/ListReviews',
      request,
      metadata,
      methodInfo_ReviewsService_ListReviews,
      callback);
};


/**
 * @param {!proto.protos.ListReviewsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListReviewsResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.listReviews =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listReviews(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteReviewLikeRequest,
 *   !proto.protos.DeleteReviewLikeResponse>}
 */
const methodInfo_ReviewsService_DeleteReviewLike = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.DeleteReviewLikeResponse,
  /** @param {!proto.protos.DeleteReviewLikeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.DeleteReviewLikeResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteReviewLikeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteReviewLikeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteReviewLikeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServiceClient.prototype.deleteReviewLike =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ReviewsService/DeleteReviewLike',
      request,
      metadata,
      methodInfo_ReviewsService_DeleteReviewLike,
      callback);
};


/**
 * @param {!proto.protos.DeleteReviewLikeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteReviewLikeResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ReviewsServicePromiseClient.prototype.deleteReviewLike =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteReviewLike(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ProductsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ProductsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.protos.ProductsServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.protos.ProductsServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetProductRequest,
 *   !proto.protos.GetProductResponse>}
 */
const methodInfo_ProductsService_GetProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.GetProductResponse,
  /** @param {!proto.protos.GetProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.GetProductResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServiceClient.prototype.getProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ProductsService/GetProduct',
      request,
      metadata,
      methodInfo_ProductsService_GetProduct,
      callback);
};


/**
 * @param {!proto.protos.GetProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServicePromiseClient.prototype.getProduct =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getProduct(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateProductRequest,
 *   !proto.protos.CreateProductResponse>}
 */
const methodInfo_ProductsService_CreateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.CreateProductResponse,
  /** @param {!proto.protos.CreateProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.CreateProductResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServiceClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ProductsService/CreateProduct',
      request,
      metadata,
      methodInfo_ProductsService_CreateProduct,
      callback);
};


/**
 * @param {!proto.protos.CreateProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServicePromiseClient.prototype.createProduct =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createProduct(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateProductRequest,
 *   !proto.protos.UpdateProductResponse>}
 */
const methodInfo_ProductsService_UpdateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.UpdateProductResponse,
  /** @param {!proto.protos.UpdateProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.UpdateProductResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServiceClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ProductsService/UpdateProduct',
      request,
      metadata,
      methodInfo_ProductsService_UpdateProduct,
      callback);
};


/**
 * @param {!proto.protos.UpdateProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServicePromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateProduct(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteProductRequest,
 *   !proto.protos.DeleteProductResponse>}
 */
const methodInfo_ProductsService_DeleteProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.DeleteProductResponse,
  /** @param {!proto.protos.DeleteProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.DeleteProductResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServiceClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ProductsService/DeleteProduct',
      request,
      metadata,
      methodInfo_ProductsService_DeleteProduct,
      callback);
};


/**
 * @param {!proto.protos.DeleteProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServicePromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteProduct(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListProductsRequest,
 *   !proto.protos.ListProductsResponse>}
 */
const methodInfo_ProductsService_ListProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.ListProductsResponse,
  /** @param {!proto.protos.ListProductsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.ListProductsResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListProductsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServiceClient.prototype.listProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.ProductsService/ListProducts',
      request,
      metadata,
      methodInfo_ProductsService_ListProducts,
      callback);
};


/**
 * @param {!proto.protos.ListProductsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListProductsResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.ProductsServicePromiseClient.prototype.listProducts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listProducts(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.SearchServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.SearchServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.protos.SearchServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.protos.SearchServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.SearchRequest,
 *   !proto.protos.SearchResponse>}
 */
const methodInfo_SearchService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.SearchResponse,
  /** @param {!proto.protos.SearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.protos.SearchRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.SearchServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.SearchService/Search',
      request,
      metadata,
      methodInfo_SearchService_Search,
      callback);
};


/**
 * @param {!proto.protos.SearchRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.SearchResponse>}
 *     The XHR Node Readable Stream
 */
proto.protos.SearchServicePromiseClient.prototype.search =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.search(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.protos;

