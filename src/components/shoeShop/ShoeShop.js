import React, { Component } from "react";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";

export default class ShoeShop extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-success text-center">Shoe Shop</h1>
        </header>
        <section>
          <div className="row">
            <CartShoe />
            <ListShoe />
          </div>
        </section>
        <footer className="container">
          <DetailShoe />
        </footer>
      </div>
    );
  }
}
