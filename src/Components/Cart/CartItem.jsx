import React from "react";
import Product from "../Product";

export default function CartItem({ item, method }) {
  const { id, title, img, total, count, price } = item;
  const {
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleClean
  } = method;
  return (
    <div className="row text-center text-capitalize mb-20">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="Product"
          className="img-fluid"
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto my-1">
        <span className="d-lg-none">price: </span>
        {price}
      </div>
      <div className="col-10 col-lg-2 mx-auto ">
        <div className="d-flex justify-content-center ">
          <div>
            <span
              className="btn btn-secondary"
              onClick={() => handleDecrement(id)}
            >
              -
            </span>
            <span className="btn btn-light">{count}</span>
            <span
              className="btn btn-secondary"
              onClick={() => handleIncrement(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <div className="cart-icon" onClick={() => handleRemove(id)}>
          <i id="trash" className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 mb-4">
        <span>Total Price</span>
        {total}
      </div>
    </div>
  );
}
