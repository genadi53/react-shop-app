import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectsCollectons = createSelector(
    [selectShop],
    shop => shop.collections
);

