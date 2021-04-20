import {RootState} from '../reducers';
import {BasketState} from '../types/basket';
import {selectCatalogItems} from './catalog';
import {createSelector} from 'reselect';

export const selectBasketState = (state: RootState): BasketState =>
  state.basketState;

export const selectBasket = (state: RootState) =>
  selectBasketState(state).basket;

export const selectTotalPrice = createSelector(
  selectBasket,
  selectCatalogItems,
  (basket, catalogItems) => {
    const basketEntries = Array.from(basket.entries());
    return basketEntries.reduce((acc, [id, count]) => {
      const catalogItem = catalogItems.find((item) => item.id === id);
      if (catalogItem !== undefined) {
        acc += count * catalogItem.price;
      }
      return acc;
    }, 0);
  },
);
