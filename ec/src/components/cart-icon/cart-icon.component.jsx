import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {ToggleCartState} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'

const CartIcon = ({ToggleCartState , hiddin}) => (
    
    <div className="cart-icon" onClick={ToggleCartState}>
    <ShoppingIcon className ="shopping-icon"/>
    <span className="item-count">0</span>

    </div>
    
)



const mapDispatchToProps = dispatch => ({
    ToggleCartState: () => dispatch(ToggleCartState()) 
})

export default connect(null , mapDispatchToProps)(CartIcon);