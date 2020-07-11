import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  decrementItem,
  removeItem,
} from "../redux/actions/cartActions";
import { getItem } from "../redux/actions/productActions";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="containerDiv">
        <h4 className="center">My Cart</h4>
        {cartItems.cartItems.length > 0 ? (
          <div className="container">
            {cartItems.cartItems.map((data) => (
              <div className="productDiv z-depth-1" key={data.id}>
                <div className="row">
                  <div className="col s6 m4 offset-m2">
                    <Link
                      to={`/product/${data.id}`}
                      onClick={() => this.props.getItem(data)}
                    >
                      <img
                        className="imageStyle left"
                        src={data.img}
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="col s6 m4 offset-m2">
                    <p className="productTitle">{data.product_name}</p>
                    <p>${data.product_price.toFixed(2)}</p>
                    <p>Qty: {data.quantity}</p>
                    <button
                      className="decrementButton btn btn-small black"
                      onClick={() => {
                        this.props.decrementItem(data);
                      }}
                    >
                      <i className="buttonSigns fas fa-minus sm" />
                    </button>
                    <button
                      className="btn btn-small black"
                      onClick={() => {
                        this.props.addItem(data);
                      }}
                      disabled={data.quantity === 10 ? true : false}
                    >
                      <i className="buttonSigns fas fa-plus sm" />
                    </button>
                    <p>
                      <Link
                        className="removeButton"
                        onClick={() => {
                          this.props.removeItem(data);
                        }}
                        to="#"
                      >
                        Remove
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <p className="limitMessage">***Limit 10 per customer.</p>
            <p className="center">Subtotal: ${cartItems.total.toFixed(2)}</p>
            <div>
              <Link className="continueShoppingButton" to="/">
                <i className="fas fa-arrow-left" /> Continue Shopping
              </Link>
              <span className="elementDivider">|</span>
              <Link className="btn blue darken-3 btn-small" to="/checkout">
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="center">
            {" "}
            <h5 className="center">Your shopping cart is empty.</h5>{" "}
            <Link className="continueShoppingButton" to="/">
              <i className="fas fa-arrow-left" /> Continue Shopping
            </Link>
          </div>
        )}
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
})(Cart);
