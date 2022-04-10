import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import "../index.scss";
const Product = ({ product }) => {
  return (
    <div className="product-box my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="product-img-small"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <p className="title">{product.name}</p>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </div>
  );
};

export default Product;
