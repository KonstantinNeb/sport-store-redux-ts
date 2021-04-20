import React from 'react';
import './basket.css';
import {RootState} from '../../store/reducers';
import {connect, ConnectedProps} from 'react-redux';
import {selectBasket, selectTotalPrice} from '../../store/selectors/basket';
import {selectCatalogItems} from '../../store/selectors/catalog';

const mapStateToProps = (state: RootState) => ({
  basket: selectBasket(state),
  catalogItems: selectCatalogItems(state),
  totalPrice: selectTotalPrice(state),
});

const connector = connect(mapStateToProps);

type BasketProps = ConnectedProps<typeof connector>;

const Basket = ({basket, catalogItems, totalPrice}: BasketProps) => {
  const basketItems = Array.from(basket.entries()).reduce(
    (acc: {id: number; name: string; count: number}[], [id, count]) => {
      const catalogItem = catalogItems.find((item) => item.id === id);
      if (catalogItem !== undefined) {
        acc.push({
          id,
          name: catalogItem.name,
          count,
        });
      }
      return acc;
    },
    [],
  );

  return (
    <div className="basket">
      <h4>Корзина</h4>
      <div>
        <span className="spanOrder">Сумма заказа: {totalPrice} $</span>
      </div>
      <div>
        Ваш заказ:
        {basket.size ? (
          <ul>
            {basketItems.map(({id, name, count}) => (
              <li key={id}>{`${name}: ${count}`}</li>
            ))}
          </ul>
        ) : (
          <span> нет товара</span>
        )}
      </div>
    </div>
  );
};

export default connector(Basket);
