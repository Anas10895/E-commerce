import {CartAcionType} from './cart-type'
import { addItemToCart } from './cart.utils';

const initalValue = {
    hiddin: true,
    cartItems :[],

}

const cartReducer = ( state = initalValue , action) => {
    switch(action.type) {
    case CartAcionType.ToggleCartState:
        return {
            ...state , 
            hiddin: !state.hiddin

        }
        case CartAcionType.AddItem:
            return {
                ...state , 
                cartItems:  addItemToCart(state.cartItems, action.payload),

    
            };

        default : return state
    }

}

export default cartReducer;