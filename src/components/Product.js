import React, { Component } from "react";
//import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { addItem } from "../redux/actions/cartActions";
import M from "materialize-css/dist/js/materialize";

class Product extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }

  addItem(item) {
    const toastHtml = "<span>Item added!</span>";
    M.toast({ html: toastHtml, classes: "green darken-3" });
    this.props.addItem(item);
  }

  render() {
    const {
      product_name,
      img,
      product_price,
      description,
      specs,
    } = this.props.items.item;
    return (
      <div className="containerStyle container center">
        <h5>{product_name}</h5>
        <img className="imgStyles" src={`../../${img}`} alt="Product"/>
        <h5>${product_price}</h5>
        <button
          className="btn blue darken-3 btn-small"
          onClick={() => this.addItem(this.props.items.item)}
        >
          Add to cart
        </button>
        <div className="productInfoDiv row">
          <div className="col s12">
            <ul
              ref={(Tabs) => {
                this.Tabs = Tabs;
              }}
              id="tabs-swipe-demo"
              className="tabs"
            >
              <li className="tab col s3">
                <a className="active" href="#description">
                  Description
                </a>
              </li>
              <li className="tab col s3">
                <a href="#specs">Specs</a>
              </li>
              <li className="tab col s3">
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </div>
          <div
            id="description"
            className="productDescription col s12"
          >
            {description}
          </div>
          <div id="specs" className="productDescription col s12">
            {specs}
          </div>
          <div id="reviews" className="productDescription col s12">
            No Reviews
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps, { addItem })(Product);