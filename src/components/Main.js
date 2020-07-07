import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductList from './Product-list'
import { getItems } from '../redux/actions/productActions';
import { addItem } from '../redux/actions/cartActions';

class Main extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <ProductList 
        products={this.props.items}
        addItem={this.props.addItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
  cartItems: state.cartItems
})

export default connect(mapStateToProps, {getItems, addItem})(Main)