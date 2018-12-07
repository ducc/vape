package main

import (
	"context"
	"github.com/ducc/vape/protos_go"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("127.0.0.1:8001", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.WithError(err).Fatalf("could not connect")
	}
	defer conn.Close()

	//c := protos.NewUsersServiceClient(conn)
	//
	//if _, err := c.CreateUser(context.Background(), &protos.CreateUserRequest{
	//	User: &protos.User{
	//		Name: "joe123",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.CreateUser(context.Background(), &protos.CreateUserRequest{
	//	User: &protos.User{
	//		Name: "bob456",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if user, err := c.GetUser(context.Background(), &protos.GetUserRequest{
	//	User: &protos.User{
	//		Id: "9f761d2f-c7fa-4afa-8c58-e8fe6fb152fd",
	//		Name: "joe123",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//} else {
	//	log.Infof("user: %v", user)
	//}

	//if _, err := c.UpdateUser(context.Background(), &protos.UpdateUserRequest{
	//	User: &protos.User{
	//		Id: "9f761d2f-c7fa-4afa-8c58-e8fe6fb152fd",
	//		Name: "joseppi",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.DeleteUser(context.Background(), &protos.DeleteUserRequest{
	//	User: &protos.User{
	//		Id: "9f761d2f-c7fa-4afa-8c58-e8fe6fb152fd",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if res, err := c.ListUsers(context.Background(), &protos.ListUsersRequest{}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//} else {
	//	for i, user := range res.Users {
	//		log.Infof("%d: %v", i, user)
	//	}
	//}

	//c := protos.NewProductsServiceClient(conn)

	//if _, err := c.CreateProduct(context.Background(), &protos.CreateProductRequest{
	//	Product: &protos.Product{
	//		Title: "ASPIRE CLEITO PRO",
	//		Description: "ye its a tank thats hard to fill",
	//		Images: []*protos.ProductImage{
	//			{Type: protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN, Url: "https://exa412312mple.com"},
	//			{Type: protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN, Url: "https://goog1221le.com"},
	//		},
	//		Links: []*protos.ProductLink{
	//			{Type: protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN, Url: "https://mem12312e.com"},
	//			{Type: protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN, Url: "https://mem1321312emem.com"},
	//			{Type: protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN, Url: "https://ajd123131iwjid.com"},
	//		},
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if product, err := c.GetProduct(context.Background(), &protos.GetProductRequest{
	//	Product: &protos.Product{
	//		Id: "8fde8a8d-08d3-4fa6-9e1b-bcae78fdb5e4",
	//		Title: "SMOK TFV8 Coils",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//} else {
	//	log.Info(product)
	//}

	//if _, err := c.UpdateProduct(context.Background(), &protos.UpdateProductRequest{
	//	Product: &protos.Product{
	//		Id: "8fde8a8d-08d3-4fa6-9e1b-bcae78fdb5e4",
	//		Title: "new title lol",
	//		Description: "new description lol",
	//		Images: []*protos.ProductImage{
	//			{Id: "54d699e6-f4fd-4c77-9d82-1f88c49a117d", Type: protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN, Url: "https://newurl.com"},
	//			{Type: protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN, Url: "http://brandnewurl.com"},
	//		},
	//		Links: []*protos.ProductLink{
	//			{Id: "54d699e6-f4fd-4c77-9d82-1f88c49a117d", Type: protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN, Url: "http://newlink.com/link/link"},
	//			{Type: protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN, Url: "http://brandnewlink.com/?asp.gmt:utc"},
	//		},
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.DeleteProduct(context.Background(), &protos.DeleteProductRequest{
	//	Product: &protos.Product{
	//		Id: "8fde8a8d-08d3-4fa6-9e1b-bcae78fdb5e4",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if res, err := c.ListProducts(context.Background(), &protos.ListProductsRequest{}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//} else {
	//	for i, product := range res.Products {
	//		log.Infof("%d: %v", i, product)
	//	}
	//}

	c := protos.NewReviewsServiceClient(conn)

	//if _, err := c.CreateReview(context.Background(), &protos.CreateReviewRequest{
	//	Review: &protos.Review{
	//		Product: &protos.Product{
	//			Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
	//		},
	//		User: &protos.User{
	//			Id: "d65fdb24-5ab4-49c5-85df-8b4402105bf3",
	//		},
	//		Content: "hello this is the review content",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.UpdateReview(context.Background(), &protos.UpdateReviewRequest{
	//	Review: &protos.Review{
	//		Id: "133d5acd-ae28-4c32-b650-48def8c6c03d",
	//		Product: &protos.Product{
	//			Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
	//		},
	//		Content: "this is the new content",
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.UpdateReview(context.Background(), &protos.UpdateReviewRequest{
	//	Review: &protos.Review{
	//		Id: "e68351ad-095f-41bf-b441-60821eb887f2",
	//		Product: &protos.Product{
	//			Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
	//		},
	//		Likes: []*protos.ReviewLike{{
	//			Review: &protos.Review{
	//				Id: "e68351ad-095f-41bf-b441-60821eb887f2",
	//			},
	//			User: &protos.User{
	//				Id: "d65fdb24-5ab4-49c5-85df-8b4402105bf3",
	//			},
	//		}},
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	//if _, err := c.DeleteReview(context.Background(), &protos.DeleteReviewRequest{
	//	Review: &protos.Review{
	//		Id: "133d5acd-ae28-4c32-b650-48def8c6c03d",
	//		Product: &protos.Product{
	//			Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
	//		},
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}

	if res, err := c.GetReview(context.Background(), &protos.GetReviewRequest{
		Review: &protos.Review{
			Id: "e68351ad-095f-41bf-b441-60821eb887f2",
			Product: &protos.Product{
				Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
			},
		},
	}); err != nil {
		log.WithError(err).Fatalf("could not send request")
	} else {
		log.Info(res.Review)
	}

	//if _, err := c.DeleteReviewLike(context.Background(), &protos.DeleteReviewLikeRequest{
	//	Like: &protos.ReviewLike{
	//		Id: "760a1326-3e0a-4862-9fcc-1f1b6ecf6b92",
	//		Review: &protos.Review{
	//			Id: "e68351ad-095f-41bf-b441-60821eb887f2",
	//			Product: &protos.Product{
	//				Id: "46fe5ff7-d820-422d-97c0-d7d9717d5a4e",
	//			},
	//		},
	//	},
	//}); err != nil {
	//	log.WithError(err).Fatalf("could not send request")
	//}
}
