 import {CartAcionType} from './cart-type'
import { CANCELLED } from 'dns'

export const ToggleCartState = () => ({
    type:CartAcionType.ToggleCartState,
});

export const addItem = item => ({
    type : CartAcionType.AddItem,
    payload : item
});