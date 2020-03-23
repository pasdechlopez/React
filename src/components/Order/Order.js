import React from 'react';
import './Order.css';

const Order = ({ name, price, createdAt }) => (
  <div className="order">
    <div className="order__wrapper">
      <p className="wrapper__name">Name: {name}</p>
      <p className="wrapper__price">
        Price: <span className="order__price">{price}</span>
      </p>
    </div>

    <div className="order__date">
      <p className="date__date">Creation date: {createdAt}</p>
    </div>
  </div>
);

export default Order;
