import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Homepage from './Homepage';
import Login from './Login';
import ShopPage from './ShopPage';

import { auth, createUserProfileDoc } from 'firebase/firebase.utils';

const Root = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <Router>
      <MainTemplate currentUser={currentUser}>
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
