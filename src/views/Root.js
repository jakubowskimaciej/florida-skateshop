import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Homepage from './Homepage';
import Login from './Login';
import ShopPage from './ShopPage';

import { auth, createUserProfileDoc } from 'firebase/firebase.utils';
import { setCurrentUser } from 'actions';
import CollectionPage from './CollectionPage';
import { selectCurrentUser } from 'redux/user/user.selectors';
import Checkout from './Checkout';

const Root = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [dispatch]);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/sign-in">
            {currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/collection/:pathName">
            <CollectionPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
