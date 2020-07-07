import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div style={{ marginBottom: "5em" }}>
        <h4 className="center">My Cart</h4>
        {cartItems.cartItems.length > 0 ? (
          <div className="container">
            {cartItems.cartItems.map((data) => (
              <div className="col s12 m7" key={data.id}>
                <div className="card horizontal">
                  <div
                    className="card-image"
                    style={{ marginTop: "2.5em", marginLeft: "1em" }}
                  >
                    <img
                      src={data.img}
                      alt="Product"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>

                  <div className="card-stacked">
                    <div className="card-content">
                      <p style={{ fontWeight: "bold" }}>{data.product_name}</p>
                      <div className="left">
                        <p>${data.product_price.toFixed(2)}</p>
                        <p>Quantity: {data.quantity}</p>
                        <div style={{ marginTop: "3px" }}>
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
                        </div>
                      </div>

                      <div className="right">
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
                </div>
              </div>
            ))}
            <p
              style={{ fontSize: "12px" }}
            >
              ***Limit 10 per customer.
            </p>
            <p className="center">Subtotal: ${cartItems.total.toFixed(2)}</p>
            <div>
              <Link style={styles} to="/">
                <i className="fas fa-arrow-left" /> Continue Shopping
              </Link>
              <span style={{ marginRight: "1rem" }}>|</span>
              <Link style={styles} to="/checkout">
                Checkout <i className="fas fa-arrow-right" />
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

export default connect(mapStateToProps, { addItem, decrementItem, removeItem })(
  Cart
);
