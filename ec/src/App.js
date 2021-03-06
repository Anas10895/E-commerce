import './App.css';
import { Route, Switch, Redirect}  from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component.jsx"
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { dispatch } from 'rxjs/internal/observable/range';
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {

  //when the user log out set unsubscribeFromAuth to null when componentWillUnmount 
  unsubscribeFromAuth = null;


  componentDidMount() {
    const  {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
          // console.log(this.state);
          
        })
      }
      // if the user logout we set cuernt user to null with value we are getting from userAuth 
      setCurrentUser(userAuth);

      
  
    })

    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
      <Header />
      <Switch>
      <Route exact  path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route exact
       path='/signin'
        render={() => this.props.currentUser
         ?
            (<Redirect to="/" />)
          :
            (<SignInAndSignUp/>) }  

          />
  
      </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})



const mapDispatchToProps = dispatch => ({
  setCurrentUser :user => dispatch(setCurrentUser(user))
}) 

export default connect(mapStateToProps,mapDispatchToProps )(App)