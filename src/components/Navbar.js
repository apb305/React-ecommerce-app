import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize";

class Navbar extends Component {

  componentDidMount() {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  }

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
              <Link className="right" to="/cart">
                <i
                  className="fas fa-shopping-cart fa-lg"
                ></i>
                <span className="cartItemsCount">
                  {this.props.cartItems.cartItems.length}
                </span>
              </Link>
              <Link className="navShopLink right" to="/">
                Shop
              </Link>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li>
            <Link className="sidenav-close" to="/">Home</Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/about">About</Link>
          </li>
          <li>{/* <Link to="/contact">Contact</Link> */}</li>
          <li className="cart waves-effect modal-trigger">
            <Link className="sidenav-close" to="/cart">
              <i className="fas fa-shopping-cart fa-lg"></i>
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
