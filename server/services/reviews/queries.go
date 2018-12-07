package reviews

const getReviewByIDQuery = `
SELECT 
	reviews.product_id as product_id, 
	reviews.time_created as review_time_created, 
	reviews.time_updated as review_time_updated, 
	reviews.user_id as review_user_id, 
	reviews.content as review_content,
	reviews_likes.like_id as like_id,
	reviews_likes.user_id as like_user_id
FROM 
	reviews 
LEFT OUTER JOIN
	reviews_likes
ON
	reviews.product_id = reviews_likes.product_id
	AND reviews.review_id = reviews_likes.review_id
WHERE 
	reviews.product_id = $1
	AND reviews.review_id = $2`

const getReviewsQuery = `
SELECT 
	reviews.product_id as product_id,
	reviews.review_id as review_id,
	reviews.time_created as review_time_created, 
	reviews.time_updated as review_time_updated, 
	reviews.user_id as review_user_id, 
	reviews.content as review_content,
	reviews_likes.like_id as like_id,
	reviews_likes.user_id as like_user_id,
FROM 
	reviews 
LEFT OUTER JOIN
	reviews_likes
ON
	reviews.product_id = reviews_likes.product_id
	AND reviews.review_id = reviews_likes.review_id`
