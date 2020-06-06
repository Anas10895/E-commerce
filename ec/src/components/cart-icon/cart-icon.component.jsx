import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {ToggleCartState} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
const CartIcon = ({ToggleCartState , hiddin , itemCount}) => (
    
    <div className="cart-icon" onClick={ToggleCartState}>
    <ShoppingIcon className ="shopping-icon"/>
    <span className="item-count">{itemCount}</span>

    </div>
    
)

const mapStateToProps = (state)=>({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    ToggleCartState: () => dispatch(ToggleCartState()) 
})

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);