import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initState = {
  orders: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, orders: state.orders.slice(1) };
    default:
      return state;
  }
};
