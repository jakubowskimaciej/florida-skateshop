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

import { auth, createUserProfileDoc } from 'firebase/firebase.utils';
import { setCurrentUser } from 'actions';
import CollectionPage from './CollectionPage';
import { selectCurrentUser } from 'selectors/user/user.selectors';
import Checkout from './Checkout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ClothesPage from './ClothesPage';
import SkateboardPage from './SkateboardPage';

library.add(faTrashAlt);

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
          <Route path="/clothes">
            <ClothesPage />
          </Route>
          <Route path="/skateboard/:pathName?">
            <SkateboardPage />
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
