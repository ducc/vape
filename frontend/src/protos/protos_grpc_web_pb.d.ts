import * as grpcWeb from 'grpc-web';
import {
  Timestamp,
  CreateProductRequest,
  CreateProductResponse,
  CreateReviewRequest,
  CreateReviewResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  DeleteReviewLikeRequest,
  DeleteReviewLikeResponse,
  DeleteReviewRequest,
  DeleteReviewResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetProductRequest,
  GetProductResponse,
  GetReviewRequest,
  GetReviewResponse,
  GetUserRequest,
  GetUserResponse,
  ListProductsRequest,
  ListProductsResponse,
  ListReviewsRequest,
  ListReviewsResponse,
  ListUsersRequest,
  ListUsersResponse,
  Product,
  ProductImage,
  ProductLink,
  Review,
  ReviewLike,
  SearchRequest,
  SearchResponse,
  Timestamps,
  UpdateProductRequest,
  UpdateProductResponse,
  UpdateReviewRequest,
  UpdateReviewResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User} from './protos_pb';

export class UsersServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetUserResponse) => void
  ): grpcWeb.ClientReadableStream<GetUserResponse>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CreateUserResponse) => void
  ): grpcWeb.ClientReadableStream<CreateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: UpdateUserResponse) => void
  ): grpcWeb.ClientReadableStream<UpdateUserResponse>;

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteUserResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteUserResponse>;

  listUsers(
    request: ListUsersRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListUsersResponse) => void
  ): grpcWeb.ClientReadableStream<ListUsersResponse>;

}

export class ReviewsServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getReview(
    request: GetReviewRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetReviewResponse) => void
  ): grpcWeb.ClientReadableStream<GetReviewResponse>;

  createReview(
    request: CreateReviewRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CreateReviewResponse) => void
  ): grpcWeb.ClientReadableStream<CreateReviewResponse>;

  updateReview(
    request: UpdateReviewRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: UpdateReviewResponse) => void
  ): grpcWeb.ClientReadableStream<UpdateReviewResponse>;

  deleteReview(
    request: DeleteReviewRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteReviewResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteReviewResponse>;

  listReviews(
    request: ListReviewsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListReviewsResponse) => void
  ): grpcWeb.ClientReadableStream<ListReviewsResponse>;

  deleteReviewLike(
    request: DeleteReviewLikeRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteReviewLikeResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteReviewLikeResponse>;

}

export class ProductsServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getProduct(
    request: GetProductRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetProductResponse) => void
  ): grpcWeb.ClientReadableStream<GetProductResponse>;

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CreateProductResponse) => void
  ): grpcWeb.ClientReadableStream<CreateProductResponse>;

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: UpdateProductResponse) => void
  ): grpcWeb.ClientReadableStream<UpdateProductResponse>;

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteProductResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteProductResponse>;

  listProducts(
    request: ListProductsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<ListProductsResponse>;

}

export class SearchServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  search(
    request: SearchRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SearchResponse) => void
  ): grpcWeb.ClientReadableStream<SearchResponse>;

}

export class UsersServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<GetUserResponse>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CreateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<UpdateUserResponse>;

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteUserResponse>;

  listUsers(
    request: ListUsersRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ListUsersResponse>;

}

export class ReviewsServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getReview(
    request: GetReviewRequest,
    metadata: grpcWeb.Metadata
  ): Promise<GetReviewResponse>;

  createReview(
    request: CreateReviewRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CreateReviewResponse>;

  updateReview(
    request: UpdateReviewRequest,
    metadata: grpcWeb.Metadata
  ): Promise<UpdateReviewResponse>;

  deleteReview(
    request: DeleteReviewRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteReviewResponse>;

  listReviews(
    request: ListReviewsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ListReviewsResponse>;

  deleteReviewLike(
    request: DeleteReviewLikeRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteReviewLikeResponse>;

}

export class ProductsServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getProduct(
    request: GetProductRequest,
    metadata: grpcWeb.Metadata
  ): Promise<GetProductResponse>;

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CreateProductResponse>;

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata
  ): Promise<UpdateProductResponse>;

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteProductResponse>;

  listProducts(
    request: ListProductsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ListProductsResponse>;

}

export class SearchServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  search(
    request: SearchRequest,
    metadata: grpcWeb.Metadata
  ): Promise<SearchResponse>;

}

