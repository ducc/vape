CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  time_updated TIMESTAMP,
  name string NOT NULL
);

CREATE TABLE products (
  product_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  time_updated TIMESTAMP,
  title STRING NOT NULL,
  description STRING NOT NULL
);

CREATE TABLE products_images (
  product_id UUID,
  image_id UUID DEFAULT gen_random_uuid(),
  type STRING NOT NULL,
  url STRING NOT NULL,
  PRIMARY KEY (product_id, image_id),
  CONSTRAINT fk_products FOREIGN KEY (product_id) REFERENCES products ON DELETE CASCADE
) INTERLEAVE IN PARENT products (product_id);

CREATE TABLE products_links (
  product_id UUID,
  link_id UUID DEFAULT gen_random_uuid(),
  type STRING NOT NULL,
  url STRING NOT NULL,
  PRIMARY KEY (product_id, link_id),
  CONSTRAINT fk_products FOREIGN KEY (product_id) REFERENCES products ON DELETE CASCADE
) INTERLEAVE IN PARENT products (product_id);

CREATE TABLE reviews (
  product_id UUID,
  review_id UUID DEFAULT gen_random_uuid(),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  time_updated TIMESTAMP,
  user_id UUID NOT NULL,
  content STRING NOT NULL,
  PRIMARY KEY (product_id, review_id),
  CONSTRAINT fk_products FOREIGN KEY (product_id) REFERENCES products ON DELETE CASCADE,
  CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users
) INTERLEAVE IN PARENT products (product_id);

CREATE TABLE reviews_likes (
  product_id UUID,
  review_id UUID,
  like_id UUID DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  PRIMARY KEY (product_id, review_id, like_id),
  CONSTRAINT fk_reviews FOREIGN KEY (product_id, review_id) REFERENCES reviews ON DELETE CASCADE,
  CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users,
  UNIQUE (review_id, user_id)
) INTERLEAVE IN PARENT reviews (product_id, review_id);


-- review liquids by taste, bitter etc
-- review mods by ...
-- review tanks by ..
-- review add similar products/tastes like
