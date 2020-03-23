import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { connect } from 'react-redux';

export class Farm extends Component {
  render() {
    const { orders, moveOrderToCustomer } = this.props;
    return (
      <div className="farm">
        <h2>Farm</h2>
        <button
          className="button"
          onClick={moveOrderToCustomer}
          disabled={!orders.length}
        >
          Sent to client
        </button>
        <div>
          {orders.map(element => (
            <Order
              name={element.name}
              createdAt={element.createdAt.toLocaleString()}
              price={element.price}
              key={element.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  moveOrderToCustomer: () => dispatch(moveOrderToCustomer())
});

const mapStateToProps = state => ({
  orders: state.farm.orders
});

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
