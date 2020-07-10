import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  decrementItem,
  removeItem,
} from "../redux/actions/cartActions";
import { getItem } from "../redux/actions/productActions"

const styles = {
  marginRight: "1em",
  color: "black",
  textAlign: "center",
};

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div style={{ marginBottom: "5em" }}>
        <h4 className="center">My Cart</h4>
        {cartItems.cartItems.length > 0 ? (
          <div className="container">
            {cartItems.cartItems.map((data) => (
              <div className="z-depth-1" key={data.id} style={{ marginTop: "1em"}}>
                <div className="row">
                  <div className="col s6 m4 offset-m2">
                  <Link to={`/product/${data.id}`} onClick={() => this.props.getItem(data)}>
                    <img
                      src={data.img}
                      alt="Product"
                      style={{
                        width: "70px",
                        height: "70px",
                        marginTop: "1em",
                      }}
                    />
                    </Link>
                  </div>

                  <div className="col s6 m4 offset-m2">
                    <p style={{ fontWeight: "bold" }}>{data.product_name}</p>
                    <p>${data.product_price.toFixed(2)}</p>
                    <p>Qty: {data.quantity}</p>
                    <button
                      className="btn btn-small black"
                      style={{ color: "silver", marginRight: "3px" }}
                      onClick={() => {
                        this.props.decrementItem(data);
                      }}
                    >
                      <i
                        className="fas fa-minus sm"
                        style={{ color: "silver" }}
                      />
                    </button>
                    <button
                      className="btn btn-small black"
                      onClick={() => {
                        this.props.addItem(data);
                      }}
                      disabled={data.quantity === 10 ? true : false}
                    >
                      <i
                        className="fas fa-plus sm"
                        style={{ color: "silver" }}
                      />
                    </button>
                    <p>
                      <Link
                        onClick={() => {
                          this.props.removeItem(data);
                        }}
                        to="#"
                        style={{ color: "red" }}
                      >
                        Remove
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <p style={{ fontSize: "12px" }}>***Limit 10 per customer.</p>
            <p className="center">Subtotal: ${cartItems.total.toFixed(2)}</p>
            <div>
              <Link style={styles} to="/">
                <i className="fas fa-arrow-left" /> Continue Shopping
              </Link>
              <span style={{ marginRight: "1rem" }}>|</span>
              <Link className="btn blue darken-3 btn-small" to="/checkout">
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="center">
            {" "}
            <h5 className="center">Your shopping cart is empty.</h5>{" "}
            <Link style={styles} to="/">
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

export default connect(mapStateToProps, { addItem, decrementItem, removeItem, getItem })(
  Cart
);
