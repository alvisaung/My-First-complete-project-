import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Styled";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, title, img, price, company, info } = value.productDetail;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h3>{title}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto text-center col-md-6 my-3">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto text-center col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3  mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price: <span>$</span>
                    {price}
                  </h4>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <Link to="/Cart">
                    <ButtonContainer
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      Add to Cart
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
