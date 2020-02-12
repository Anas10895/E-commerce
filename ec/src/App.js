import React from 'react';
import './App.css';
import { Route, Switch}  from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component.jsx"
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact  path='/' component={HomePage} />
    <Route  path='/shop' component={ShopPage} />
    <Route  path='/signin' component={SignInAndSignUp} />

    </Switch>
    </div>
  );
}

export default App;
