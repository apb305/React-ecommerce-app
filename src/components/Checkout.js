import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addItem,
  decrementItem,
  removeItem,
} from "../redux/actions/cartActions";

const styles = {
  marginRight: "1em",
  color: "black",
  textAlign: "center",
};

class Checkout extends Component {
  render() {
    const { cartItems } = this.props.cartItems;
    return (
      <div style={{ marginBottom: "5em" }}>
        <h4 className="center">Checkout</h4>
        <div className="cartTop container">

          {/* Checkout items */}
          <ul className="collection">
            {cartItems.map((data) => (
              <li
              className="collection-item"
              key={data.id}
            >
              <img
                src={data.img}
                style={{ width: "60px", height: "60px" }}
                alt="product"
              />
              <p>
                <span style={{fontWeight: "bold"}}>{data.product_name}</span> 
                <br />${data.product_price.toFixed(2)} <br />
                Quantity: {data.quantity}
              </p>
            </li>
            ))}
          </ul>

           {/* Order summary section */}
          <div style={{border: "solid silver 1px" }}>
            <div style={{ padding: "3em" }}>
            <h5 className="center">Order Summary</h5>
              <p>
                Items ({this.props.cartItems.cartItems.length}):{" "}
                <span className="right">
                  ${this.props.cartItems.total.toFixed(2)}
                </span>
              </p>
              <hr/>
              <p><span style={{fontWeight: "bold"}}>Order Total:</span> <span className="right">${this.props.cartItems.total.toFixed(2)}</span></p>
            </div>
          </div>

          {/* Order button and shopping links */}
          <button className="btn blue darken-3 btn-small right" style={{marginTop: "1em"}}>Place your order</button>
          <div style={{ marginTop: "1em" }}>
            <Link style={styles} to="/cart">
              <i className="fas fa-arrow-left" /> Back to cart
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //items: state.items.items,
  cartItems: state.cartItems,
  total: state.total,
});

export default connect(mapStateToProps, { addItem, decrementItem, removeItem })(
  Checkout
);
