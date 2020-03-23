import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const budget = (
  state = { profit: 0, farmExpanse: 0, deliveryExpanse: 0, marketExpanse: 0 },
  action
) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, deliveryExpanse: state.deliveryExpanse + 20 };
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpanse: state.marketExpanse + 100
      };

    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: state.farmExpanse + 100 };

    default:
      return state;
  }
};

export default budget;
