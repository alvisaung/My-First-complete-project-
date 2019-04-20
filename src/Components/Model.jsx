import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Styled";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { addToCart, closeModel, handleModel } = value;
          const { id, img, title, price } = value.modalProduct;
          if (!handleModel) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="mod"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center"
                    >
                      <h3>Item peeking</h3>
                      <img src={img} alt={title} className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModel()}>
                          Go Back
                        </ButtonContainer>{" "}
                      </Link>
                      <Link to="/">
                        <ButtonContainer onClick={() => addToCart(id)}>
                          Add Cart
                        </ButtonContainer>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #mod {
    background: var(--mainWhite);
    border-radius: 5px;
  }
`;
