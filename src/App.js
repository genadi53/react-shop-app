import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.copmponent';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/SignInAndSignUp.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

        });
      } else {
        setCurrentUser(userAuth);
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
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
  
}

const mapDispatchToProps = dispatch  => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
