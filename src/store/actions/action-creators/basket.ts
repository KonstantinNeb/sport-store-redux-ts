import {AnyAction} from 'redux';
import {BASKET_ACTION_TYPES} from '../action-types/basket';

export const increaseItem = (id: number): AnyAction => {
  return {
    type: BASKET_ACTION_TYPES.INCREASE_ITEM,
    payload: {id},
  };
};

export const decreaseItem = (id: number): AnyAction => {
  return {
    type: BASKET_ACTION_TYPES.DECREASE_ITEM,
    payload: {id},
  };
};
