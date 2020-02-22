import './App.css';
import { Route, Switch}  from 'react-router-dom'
import React from 'react'

import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component.jsx"
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'


export default class App extends React.Component {
  constructor(){
  super();

    this.state={
  curentUsers:null,
  }
  };
  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({curentUsers: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
      <Header user = {this.state.curentUsers}/>
      <Switch>
      <Route exact  path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/signin' component={SignInAndSignUp} />
  
      </Switch>
      </div>
    );
  }
}

