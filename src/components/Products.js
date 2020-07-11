import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.props.addItem(item);
    const toastHtml = "<span>Item added!</span>";
    M.toast({ html: toastHtml, classes: "green darken-3" });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container productContainer">
        <div className="row">
          <h4 className="center">Store Items</h4>
          {products.map((item) => (
            <div
              className="col s12 m6 l4 center productDiv"
              key={item.id}
            >
              <Link
                to={`/product/${item.id}`}
                onClick={() => this.props.getItem(item)}
              >
                <img className="productImage" src={item.img} alt="product" />
                <p className="productTitle">{item.product_name}</p>
              </Link>
              <p>${item.product_price.toFixed(2)}</p>
              <button
                className="btn blue darken-3 btn-small"
                onClick={() => {
                  this.addItem(item);
                }}
              >
                Add to cart
              </button>
              <hr className="productDivider"></hr>
            </div>
          ))}
        </div>
        <p className="center aboutPageLink">
          This is a small shopping cart application created by Anthony Bernard.
          Click <Link to="/about"> here </Link> for more information.
        </p>
      </div>
    );
  }
}
