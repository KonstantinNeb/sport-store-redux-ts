import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store/reducers';
import {selectCatalogItems} from '../../store/selectors/catalog';
import {
  increaseItem,
  decreaseItem,
} from '../../store/actions/action-creators/basket';

const mapStateToProps = (state: RootState) => ({
  catalogItems: selectCatalogItems(state),
});

const mapDispatchToProps = {
  addItem: increaseItem,
  deleteItem: decreaseItem,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type CatalogProps = ConnectedProps<typeof connector>;

const Catalog = ({catalogItems, addItem, deleteItem}: CatalogProps) => {
  const handlePlusClick = (id: number) => {
    addItem(id);
  };

  const handleMinusClick = (id: number) => {
    deleteItem(id);
  };

  return (
    <div>
      <h4>Каталог</h4>
      <ul>
        {catalogItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price} $</span>
            <button onClick={() => handlePlusClick(item.id)}>+</button>
            <button onClick={() => handleMinusClick(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connector(Catalog);
