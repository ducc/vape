export class Timestamp {
  constructor ();
  getSeconds(): number;
  setSeconds(a: number): void;
  getNanos(): number;
  setNanos(a: number): void;
  toObject(): Timestamp.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    Seconds: number;
    Nanos: number;
  }
}

export class CreateProductRequest {
  constructor ();
  getProduct(): Product;
  setProduct(a: Product): void;
  toObject(): CreateProductRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    Product: Product;
  }
}

export class CreateProductResponse {
  constructor ();
  toObject(): CreateProductResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateProductResponse;
}

export namespace CreateProductResponse {
  export type AsObject = {
  }
}

export class CreateReviewRequest {
  constructor ();
  getReview(): Review;
  setReview(a: Review): void;
  toObject(): CreateReviewRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateReviewRequest;
}

export namespace CreateReviewRequest {
  export type AsObject = {
    Review: Review;
  }
}

export class CreateReviewResponse {
  constructor ();
  toObject(): CreateReviewResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateReviewResponse;
}

export namespace CreateReviewResponse {
  export type AsObject = {
  }
}

export class CreateUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): CreateUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class CreateUserResponse {
  constructor ();
  toObject(): CreateUserResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
  }
}

export class DeleteProductRequest {
  constructor ();
  getProduct(): Product;
  setProduct(a: Product): void;
  toObject(): DeleteProductRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    Product: Product;
  }
}

export class DeleteProductResponse {
  constructor ();
  toObject(): DeleteProductResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteProductResponse;
}

export namespace DeleteProductResponse {
  export type AsObject = {
  }
}

export class DeleteReviewLikeRequest {
  constructor ();
  getLike(): ReviewLike;
  setLike(a: ReviewLike): void;
  toObject(): DeleteReviewLikeRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteReviewLikeRequest;
}

export namespace DeleteReviewLikeRequest {
  export type AsObject = {
    Like: ReviewLike;
  }
}

export class DeleteReviewLikeResponse {
  constructor ();
  toObject(): DeleteReviewLikeResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteReviewLikeResponse;
}

export namespace DeleteReviewLikeResponse {
  export type AsObject = {
  }
}

export class DeleteReviewRequest {
  constructor ();
  getReview(): Review;
  setReview(a: Review): void;
  toObject(): DeleteReviewRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteReviewRequest;
}

export namespace DeleteReviewRequest {
  export type AsObject = {
    Review: Review;
  }
}

export class DeleteReviewResponse {
  constructor ();
  toObject(): DeleteReviewResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteReviewResponse;
}

export namespace DeleteReviewResponse {
  export type AsObject = {
  }
}

export class DeleteUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): DeleteUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class DeleteUserResponse {
  constructor ();
  toObject(): DeleteUserResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
  }
}

export class GetProductRequest {
  constructor ();
  getProduct(): Product;
  setProduct(a: Product): void;
  toObject(): GetProductRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetProductRequest;
}

export namespace GetProductRequest {
  export type AsObject = {
    Product: Product;
  }
}

export class GetProductResponse {
  constructor ();
  getProduct(): Product;
  setProduct(a: Product): void;
  toObject(): GetProductResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetProductResponse;
}

export namespace GetProductResponse {
  export type AsObject = {
    Product: Product;
  }
}

export class GetReviewRequest {
  constructor ();
  getReview(): Review;
  setReview(a: Review): void;
  toObject(): GetReviewRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetReviewRequest;
}

export namespace GetReviewRequest {
  export type AsObject = {
    Review: Review;
  }
}

export class GetReviewResponse {
  constructor ();
  getReview(): Review;
  setReview(a: Review): void;
  toObject(): GetReviewResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetReviewResponse;
}

export namespace GetReviewResponse {
  export type AsObject = {
    Review: Review;
  }
}

export class GetUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): GetUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class GetUserResponse {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): GetUserResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    User: User;
  }
}

export class ListProductsRequest {
  constructor ();
  toObject(): ListProductsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListProductsRequest;
}

export namespace ListProductsRequest {
  export type AsObject = {
  }
}

export class ListProductsResponse {
  constructor ();
  getProductsList(): Product[];
  setProductsList(a: Product[]): void;
  toObject(): ListProductsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    ProductsList: Product[];
  }
}

export class ListReviewsRequest {
  constructor ();
  toObject(): ListReviewsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListReviewsRequest;
}

export namespace ListReviewsRequest {
  export type AsObject = {
  }
}

export class ListReviewsResponse {
  constructor ();
  getReviewsList(): Review[];
  setReviewsList(a: Review[]): void;
  toObject(): ListReviewsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListReviewsResponse;
}

export namespace ListReviewsResponse {
  export type AsObject = {
    ReviewsList: Review[];
  }
}

export class ListUsersRequest {
  constructor ();
  toObject(): ListUsersRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
  }
}

export class ListUsersResponse {
  constructor ();
  getUsersList(): User[];
  setUsersList(a: User[]): void;
  toObject(): ListUsersResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    UsersList: User[];
  }
}

export class Product {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getTimestamps(): Timestamps;
  setTimestamps(a: Timestamps): void;
  getTitle(): string;
  setTitle(a: string): void;
  getDescription(): string;
  setDescription(a: string): void;
  getImagesList(): ProductImage[];
  setImagesList(a: ProductImage[]): void;
  getLinksList(): ProductLink[];
  setLinksList(a: ProductLink[]): void;
  toObject(): Product.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Product;
}

export namespace Product {
  export type AsObject = {
    Id: string;
    Timestamps: Timestamps;
    Title: string;
    Description: string;
    ImagesList: ProductImage[];
    LinksList: ProductLink[];
  }
}

export class ProductImage {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getType(): ProductImage.ProductImageType;
  setType(a: ProductImage.ProductImageType): void;
  getUrl(): string;
  setUrl(a: string): void;
  toObject(): ProductImage.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ProductImage;
}

export namespace ProductImage {
  export type AsObject = {
    Id: string;
    Type: ProductImage.ProductImageType;
    Url: string;
  }

  export enum ProductImageType { 
    PRODUCT_IMAGE_TYPE_UNKNOWN = 0,
  }
}

export class ProductLink {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getType(): ProductLink.ProductLinkType;
  setType(a: ProductLink.ProductLinkType): void;
  getUrl(): string;
  setUrl(a: string): void;
  toObject(): ProductLink.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ProductLink;
}

export namespace ProductLink {
  export type AsObject = {
    Id: string;
    Type: ProductLink.ProductLinkType;
    Url: string;
  }

  export enum ProductLinkType { 
    PRODUCT_LINK_TYPE_UNKNOWN = 0,
  }
}

export class Review {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getTimestamps(): Timestamps;
  setTimestamps(a: Timestamps): void;
  getProduct(): Product;
  setProduct(a: Product): void;
  getUser(): User;
  setUser(a: User): void;
  getContent(): string;
  setContent(a: string): void;
  getLikesList(): ReviewLike[];
  setLikesList(a: ReviewLike[]): void;
  toObject(): Review.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Review;
}

export namespace Review {
  export type AsObject = {
    Id: string;
    Timestamps: Timestamps;
    Product: Product;
    User: User;
    Content: string;
    LikesList: ReviewLike[];
  }
}

export class ReviewLike {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getReview(): Review;
  setReview(a: Review): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): ReviewLike.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ReviewLike;
}

export namespace ReviewLike {
  export type AsObject = {
    Id: string;
    Review: Review;
    User: User;
  }
}

export class SearchRequest {
  constructor ();
  getQuery(): string;
  setQuery(a: string): void;
  toObject(): SearchRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    Query: string;
  }
}

export class SearchResponse {
  constructor ();
  getUsersList(): User[];
  setUsersList(a: User[]): void;
  getReviewsList(): Review[];
  setReviewsList(a: Review[]): void;
  getProductsList(): Product[];
  setProductsList(a: Product[]): void;
  toObject(): SearchResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    UsersList: User[];
    ReviewsList: Review[];
    ProductsList: Product[];
  }
}

export class Timestamps {
  constructor ();
  getCreated(): Timestamp;
  setCreated(a: Timestamp): void;
  getUpdated(): Timestamp;
  setUpdated(a: Timestamp): void;
  toObject(): Timestamps.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Timestamps;
}

export namespace Timestamps {
  export type AsObject = {
    Created: Timestamp;
    Updated: Timestamp;
  }
}

export class UpdateProductRequest {
  constructor ();
  getProduct(): Product;
  setProduct(a: Product): void;
  toObject(): UpdateProductRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    Product: Product;
  }
}

export class UpdateProductResponse {
  constructor ();
  toObject(): UpdateProductResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateProductResponse;
}

export namespace UpdateProductResponse {
  export type AsObject = {
  }
}

export class UpdateReviewRequest {
  constructor ();
  getReview(): Review;
  setReview(a: Review): void;
  toObject(): UpdateReviewRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateReviewRequest;
}

export namespace UpdateReviewRequest {
  export type AsObject = {
    Review: Review;
  }
}

export class UpdateReviewResponse {
  constructor ();
  toObject(): UpdateReviewResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateReviewResponse;
}

export namespace UpdateReviewResponse {
  export type AsObject = {
  }
}

export class UpdateUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): UpdateUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class UpdateUserResponse {
  constructor ();
  toObject(): UpdateUserResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
  }
}

export class User {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getTimestamps(): Timestamps;
  setTimestamps(a: Timestamps): void;
  getName(): string;
  setName(a: string): void;
  toObject(): User.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => User;
}

export namespace User {
  export type AsObject = {
    Id: string;
    Timestamps: Timestamps;
    Name: string;
  }
}

