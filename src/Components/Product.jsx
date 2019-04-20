import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../Context";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.item;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} alt={title} className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.openModel(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0  pr-0 w-100">
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus mb-0" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/* card footer */}
          <div className="d-flex card-footer justify-content-between">
            <p className="self-align-center mb-0">{title}</p>
            <h5 className="text-blue">
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
    border-radius: 0.8rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  .card-img-top {
    transition: all 0.9s linear;
  }
  .card:hover .card-img-top {
    transform: scale(1.2);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    border-top-left-radius: 5px;
    position: absolute;
    right: 0rem;
    width: 3.3rem;
    background-color: var(--mainBlue);
    font-size: 1rem;
    border: none;
    color: var(--mainTomato);
    bottom: 0rem;
    transform: translate(100%, 100%);
    transition: all 0.7s linear;
  }
  .card:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:active {
    background-color: tomato;
    border: none;
  }
`;
Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};
