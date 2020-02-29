import './App.css';
import { Route, Switch}  from 'react-router-dom'
import React from 'react'

import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component.jsx"
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


export default class App extends React.Component {
  constructor(){
  super();

    this.state={
  currentUser:null,
  }
  };
  //when the user log out set unsubscribeFromAuth to null when componentWillUnmount 
  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            
          })
          // console.log(this.state);
          
        })
      }
      // if the user logout we set cuernt user to null with value we are getting from userAuth 
        this.setState({
          currentUser:{userAuth}
        })
      
  
    })

    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
      <Route exact  path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/signin' component={SignInAndSignUp} />
  
      </Switch>
      </div>
    );
  }
}

