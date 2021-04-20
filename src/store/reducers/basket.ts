import {BASKET_ACTION_TYPES} from '../actions/action-types/basket';
import {BasketState} from '../types/basket';

const basketInitialState: BasketState = {
  basket: new Map<number, number>(),
};

const basketReducer = (state = basketInitialState, action: any) => {
  switch (action.type) {
    case BASKET_ACTION_TYPES.INCREASE_ITEM: {
      const newState = {...state};
      newState.basket = new Map<number, number>(state.basket);
      const {id} = action.payload;
      const currentValue = newState.basket.get(id);
      const newValue = currentValue !== undefined ? currentValue + 1 : 1;
      newState.basket.set(id, newValue);
      return newState;
    }
    case BASKET_ACTION_TYPES.DECREASE_ITEM: {
      const newState = {...state};
      newState.basket = new Map<number, number>(state.basket);
      const {id} = action.payload;
      const currentValue = newState.basket.get(id);
      const newValue = currentValue !== undefined ? currentValue - 1 : 1;
      if (newValue === -1) return newState;
      newState.basket.set(id, newValue);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default basketReducer;
