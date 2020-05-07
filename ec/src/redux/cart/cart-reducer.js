import {CartAcionType} from './cart-type'

const initalValue = {
    hiddin: true
}

const cartReducer = ( state = initalValue , action) => {
    switch(action.type) {
    case CartAcionType.ToggleCartState:
        return {
            ...state , 
            hiddin: !state.hiddin

        }

        default : return state
    }

}

export default cartReducer;