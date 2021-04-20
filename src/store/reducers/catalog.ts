import {CatalogState} from '../types/catalog';

const catalogInitialState: CatalogState = {
  catalogItems: [
    {id: 1, name: 'Мяч', price: 1000},
    {id: 2, name: 'Форма', price: 2000},
    {id: 3, name: 'Лыжи', price: 1200},
    {id: 4, name: 'Кимоно', price: 2500},
    {id: 5, name: 'Бутсы', price: 3000},
    {id: 6, name: 'Кеды', price: 700},
  ],
};

const catalogReducer = (state = catalogInitialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default catalogReducer;
