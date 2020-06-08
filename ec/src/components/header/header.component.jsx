import React from "react"
import {Link} from "react-router-dom"
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.compnent'
import {createStructuredSelector} from 'reselect'
import {selectCartIHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import "./header.styles.scss"

const Header = ({currentUser, hiddin }) => { 
    return <div className="header">
    <Link className="logo-container" to="/">
        <Logo className="logo"/>
    </Link>

    <div className="options">
    <Link className="option" to="/shop">
       
        Shop
    </Link>
    
    <Link className="option" to="/contact">
        
        Contact
    </Link>
    {currentUser ? <div className='option' onClick={() => auth.signOut()}><Link className="option" to="/"> Sign Out</Link> </div>   
    :
     <Link className="option" to="/signin"> SIGN IN</Link>  }
    <div className="option">{currentUser  ? currentUser.displayName  :null}</div>
    <CartIcon/>

    </div>
    {!hiddin
    ?
    <CartDropdown/>
    :
    null
    }
    
    </div>
} 
//how to distruct nested values 
const mapStateToProps = createStructuredSelector ({
currentUser: selectCurrentUser ,
hiddin:selectCartIHidden
});

export default connect(mapStateToProps)(Header);