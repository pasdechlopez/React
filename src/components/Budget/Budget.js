import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

export const Budget = ({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse
}) => (
  <div className="budget">
    <h2>Бюджет: </h2>
    <p>
      Всего получено денег: <span className="t-profit">{profit}</span>
    </p>
    <p>
      Расходы продавцов: <span className="t-sellers">{-marketExpanse}</span>
    </p>
    <p>
      Расходы на ферме: <span className="t-farm">{-farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку:{' '}
      <span className="t-delivery">{-deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">
        {profit - marketExpanse - farmExpanse - deliveryExpanse}
      </span>
    </p>
  </div>
);

const changeState = state => {
  return {
    profit: state.budget.profit,
    farmExpanse: state.budget.farmExpanse,
    deliveryExpanse: state.budget.deliveryExpanse,
    marketExpanse: state.budget.marketExpanse
  };
};

export default connect(changeState)(Budget);
