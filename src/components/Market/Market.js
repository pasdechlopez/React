import React, { Component } from 'react';
import './Market.css';
import Order from '../Order/Order';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { connect } from 'react-redux';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    price: Math.floor(Math.random() * 100) + 100,
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    createdAt: new Date().toTimeString()
  };
};

export class Market extends Component {
  handleCreateNewOrder = () => {
    this.props.createOrder(getNewOrder());
  };

  handleSendOrderToFarm = () => {
    this.props.moveOrderToFarm(this.props.orders[0]);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>New orders</h2>

        <button
          className="market__create-button button"
          onClick={this.handleCreateNewOrder}
        >
          Create Order
        </button>
        <button
          disabled={!(this.props.orders.length > 0)}
          onClick={this.handleSendOrderToFarm}
          className="button"
        >
          Send order to farm
        </button>

        <div className="market__order">
          {orders.map((order, i) => {
            return (
              <Order
                name={order.name}
                createdAt={order.createdAt}
                key={i}
                price={order.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createOrder: newOrder => dispatch(createOrder(newOrder)),
  moveOrderToFarm: newOrder => dispatch(moveOrderToFarm(newOrder))
});
const mapStateToProps = state => ({
  orders: state.market.orders
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
