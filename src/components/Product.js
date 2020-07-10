import React, { Component } from "react";
//import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { addItem } from "../redux/actions/cartActions";
import M from "materialize-css/dist/js/materialize";

const containerStyle = {
  marginTop: "3em",
  marginBottom: "5em"
};

const imgStyles = {
  width: "300px",
  height: "300px",
};

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
      <div className="container center" style={containerStyle}>
        <h5>{product_name}</h5>
        <img src={`../../${img}`} alt="Product" style={imgStyles} />
        <h5>${product_price}</h5>
        <button
          className="btn blue darken-3 btn-small"
          onClick={() => this.addItem(this.props.items.item)}
        >
          Add to cart
        </button>
        <div className="row" style={{ marginTop: "3em" }}>
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
            className="col s12"
            style={{ marginTop: "2em" }}
          >
            {description}
          </div>
          <div id="specs" className="col s12" style={{ marginTop: "2em" }}>
            {specs}
          </div>
          <div id="reviews" className="col s12" style={{ marginTop: "2em" }}>
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