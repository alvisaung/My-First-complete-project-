import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import Product from "./Product";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Title first="Our" second="product" />
        <div className="row">
          <ProductConsumer>
            {value => {
              return value.products.map(item => {
                return <Product key={item.id} item={item} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
