import React from "react";

export default function CartList() {
  return (
    <div className="d-none d-lg-block  container-fluid text-center">
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">Product</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">Product Name</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">Price</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
