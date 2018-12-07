package products

const listProductsQuery = `
SELECT
	products.product_id as product_id,
 	products.time_created as product_time_created,
	products.time_updated as product_time_updated,
 	products.title as product_title,
	products.description as product_description,
	products_images.image_id as image_id,
	products_images.type as image_type,
	products_images.url as image_url,
	products_links.link_id as link_id,
	products_links.type as link_type,
	products_links.url as link_url
FROM
	products
LEFT OUTER JOIN
	products_images
ON
	products.product_id = products_images.product_id
LEFT OUTER JOIN
	products_links
ON
	products.product_id = products_links.product_id `

const productByTitleQuery = `
SELECT
	products.product_id as product_id,
 	products.time_created as product_time_created,
	products.time_updated as product_time_updated,
	products.description as product_description,
	products_images.image_id as image_id,
	products_images.type as image_type,
	products_images.url as image_url,
	products_links.link_id as link_id,
	products_links.type as link_type,
	products_links.url as link_url
FROM
	products
LEFT OUTER JOIN
	products_images
ON
	products.product_id = products_images.product_id
LEFT OUTER JOIN
	products_links
ON
	products.product_id = products_links.product_id
WHERE
	products.title = $1`

const productByIDQuery = `
SELECT
 	products.time_created as product_time_created,
	products.time_updated as product_time_updated,
 	products.title as product_title,
	products.description as product_description,
	products_images.image_id as image_id,
	products_images.type as image_type,
	products_images.url as image_url,
	products_links.link_id as link_id,
	products_links.type as link_type,
	products_links.url as link_url
FROM
	products
LEFT OUTER JOIN
	products_images
ON
	products.product_id = products_images.product_id
LEFT OUTER JOIN
	products_links
ON
	products.product_id = products_links.product_id
WHERE
	products.product_id = $1`
