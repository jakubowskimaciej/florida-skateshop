import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import ShopPage from './ShopPage';

const Root = () => {
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
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
