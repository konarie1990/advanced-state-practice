import React from "react";
import Reviews from "./Reviews";

function ProductDetail(props) {
  const { name, description, rating, imgUrl, reviews } = props.product;
  // console.log(reviews);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{ width: "320px", height: "150px" }} src={imgUrl} alt="" />
        <div className="caption">
          <h4>
            <a href="#">{name}</a>
          </h4>
          <p>{description}</p>
        </div>
        <Reviews render={product => <p>Hello {product.reviews}</p>} />
        <div className="ratings">
          <p className="pull-right">15 reviews</p>
          <p>{stars}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
