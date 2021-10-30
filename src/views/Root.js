import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Homepage from './Homepage';
import Login from './Login';
import ShopPage from './ShopPage';

import { auth, createUserProfileDoc } from 'firebase/firebase.utils';
import { setCurrentUser } from 'actions';

const Root = () => {
  const dispatch = useDispatch();

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
          <Route path="/sign-in">
            <Login />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
