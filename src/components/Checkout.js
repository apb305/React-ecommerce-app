import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addItem,
  decrementItem,
  removeItem,
} from "../redux/actions/cartActions";
import { getItem } from "../redux/actions/productActions";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props.cartItems;
    return (
      <div className="checkoutContainer">
        <h4 className="center">Checkout</h4>
        <div className="container">
          {/* Checkout items */}
          <ul className="collection">
            {cartItems.map((data) => (
              <li className="collection-item" key={data.id}>
                <Link
                  to={`/product/${data.id}`}
                  onClick={() => this.props.getItem(data)}
                >
                  <img className="checkoutImage" src={data.img} alt="product" />
                </Link>
                <p>
                  <span className="productName">{data.product_name}</span>
                  <br />${data.product_price.toFixed(2)} <br />
                  Quantity: {data.quantity}
                </p>
              </li>
            ))}
          </ul>

          {/* Order summary section */}
          <div className="orderSummaryContainer">
            <div className="innerDiv">
              <h5 className="center">Order Summary</h5>
              <p>
                Items ({this.props.cartItems.cartItems.length}):{" "}
                <span className="right">
                  ${this.props.cartItems.total.toFixed(2)}
                </span>
              </p>
              <hr />
              <p>
                <span className="orderTotal">Order Total:</span>{" "}
                <span className="right">
                  ${this.props.cartItems.total.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          {/* Order button and shopping links */}
          <button
            className="placeOrderButton btn blue darken-3 btn-small right"
          >
            Place your order
          </button>
          <div className="backToCartDiv">
            <Link className="backToCart" to="/cart">
              <i className="fas fa-arrow-left" /> Back to cart
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  total: state.total,
});

export default connect(mapStateToProps, {
  addItem,
  decrementItem,
  removeItem,
  getItem,
})(Checkout);
