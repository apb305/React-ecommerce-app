import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="light-blue darken-3">
          <div className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo">
                Store
              </Link>
              <Link
                to="/"
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons">menu</i>
              </Link>
              <Link
                className="right"
                to="/cart"
              >
                <i className="fas fa-shopping-cart fa-lg" style={{ marginRight: ".5rem" }}></i>
                {this.props.cartItems.cartItems.length}
              </Link>
              <Link className="right" to="/" style={{ marginRight: "1rem" }}>
                Shop
              </Link>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
          </li>
          <li className="cart waves-effect modal-trigger">
            <Link to="/cart">
              <i className="fas fa-shopping-cart fa-lg"> 
              </i>
              {this.props.cartItems.cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps, null)(Navbar);
