import React from "react"
import {Link} from "react-router-dom"
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./header.styles.scss"

const Header = ({user}) => { 
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
    {!user  ? <Link className="option" to="/signin"> Sign In</Link> :<div onClick={() => {auth.signOut()}}><Link className="option" to="/"> Sign Out</Link></div> }

  
    </div>
    </div>
} 
export default Header;