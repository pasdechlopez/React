import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

export const Budget = ({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse
}) => (
  <div className="budget">
    <h2>Budget</h2>
    <p>
      All income: <span className="budget__income">{profit}</span>
    </p>
    <p>
      Expenses on the farm:{' '}
      <span className="budget__farm-expenses">{-farmExpanse}</span>
    </p>
    <p>
      Sellers' expenses:{' '}
      <span className="budget__sellers-expenses">{-marketExpanse}</span>
    </p>

    <p>
      Delivery exp: <span className="budget__delivery">{-deliveryExpanse}</span>
    </p>
    <p>
      Summary:{' '}
      <span className="summary">
        {profit - marketExpanse - farmExpanse - deliveryExpanse}
      </span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  profit: state.budget.profit,
  marketExpanse: state.budget.marketExpanse,
  farmExpanse: state.budget.farmExpanse,
  deliveryExpanse: state.budget.deliveryExpanse
});

export default connect(mapStateToProps)(Budget);
