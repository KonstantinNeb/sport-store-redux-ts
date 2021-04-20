import {RootState} from "../reducers";
import {CatalogState} from "../types/catalog";

export const selectCatalogState = (state: RootState): CatalogState =>
  state.catalogState as CatalogState;

export const selectCatalogItems = (state: RootState) =>
  selectCatalogState(state).catalogItems;
