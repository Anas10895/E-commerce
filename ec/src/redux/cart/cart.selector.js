import {createSelector} from 'reselect'


export const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartIHidden = createSelector(
    [selectCart],
    cart => cart.hiddin
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumaltedQuantity , cartItem) => accumaltedQuantity + cartItem.quantity,
        0

    )
)