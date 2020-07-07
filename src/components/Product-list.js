import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";

export default class ProductList extends Component {
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
      <div className="container" style={{ marginBottom: "5em" }}>
        <div className="row">
          <h4 className="center">Store Items</h4>
          {products.map((item) => (
            <div
              className="col s12 m6 l3 center"
              key={item.id}
              style={{ marginTop: "2rem" }}
            >
              <img
                src={item.img}
                style={{ width: "150px", height: "150px" }}
                alt="product"
              />
              <p style={{ fontSize: "12px" }}>{item.product_name}</p>
              <p>${item.product_price.toFixed(2)}</p>
              <button
                className="btn grey darken-4 btn-small"
                onClick={() => {
                  this.addItem(item);
                }}
                disabled={item.inCart}
              >
                Add to cart
              </button>
              <hr style={{ marginTop: "1rem", width: "60%" }}></hr>
            </div>
          ))}
        </div>
        <p className="center" style={{ marginTop: "5rem" }}>
          This is a small shopping cart application created by Anthony Bernard.
          Click <Link to="/about"> here </Link> for more information.
        </p>
      </div>
    );
  }
}
