import React from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
export default function CartTotal() {
  return (
    <div>
      <ProductConsumer>
        {value => {
          const { cardSubtotal, card, cardTax, clearAll } = value;
          return (
            <div className="container ">
              <div className="row">
                <div className="col-11 mt-2 ml-10 text-right col-sm-8 ml-sm-10 ml-md-auto">
                  <Link to="/">
                    <button className="btn btn-danger" onClick={clearAll}>
                      Clean All
                    </button>
                  </Link>
                  <h5>
                    {" "}
                    <span>Subtotal: </span> <strong>${cardSubtotal}</strong>
                  </h5>
                  <h5>
                    {" "}
                    <span>Tax: </span> <strong>${cardTax}</strong>
                  </h5>
                  <h5>
                    {" "}
                    <span>Total: </span> <strong>${card}</strong>
                  </h5>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
