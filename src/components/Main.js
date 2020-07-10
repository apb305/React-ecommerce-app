import React, { Component } from "react";
import { connect } from 'react-redux';
import Products from './Products'
import { getItems, getItem } from '../redux/actions/productActions';
import { addItem } from '../redux/actions/cartActions';

class Main extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <Products 
        products={this.props.items}
        addItem={this.props.addItem}
        getItem={this.props.getItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
  cartItems: state.cartItems
})

export default connect(mapStateToProps, {getItems, addItem, getItem})(Main)