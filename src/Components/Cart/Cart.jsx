import React, { Component } from "react";
import Title from "../Title";
import CartList from "./CartList";
import CartItem from "./CartItem";
import CardTotal from "./CartTotal";
import { ProductConsumer } from "../../Context";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title first="Your" second="cart" />
                <CartList />
                {cart.map(item => {
                  return <CartItem key={item.id} item={item} method={value} />;
                })}
                <CardTotal />
              </React.Fragment>
            );
          } else {
            return (
              <div className="text-center  m-auto text-blue">No Items yet</div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
