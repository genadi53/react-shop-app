import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.copmponent';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/SignInAndSignUp.component';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUpPage } />
      </Switch>
    </div>
  );
}

export default App;
