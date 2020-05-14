import {CartAcionType} from './cart-type'

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
                cartItems :[...state.cartItems, action.pauload],

    
            }

        default : return state
    }

}

export default cartReducer;