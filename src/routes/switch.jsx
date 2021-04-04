import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Dashboard/Layout';
import Homepage from '../pages/Homepage/Homepage';
import routes from './constants';

export function SwitchRoutes() {
  return (
    <Switch>
      <Route path={routes.homePage.url}>
        <Layout>
          <Homepage />
        </Layout>
      </Route>
      <Route exact path={routes.gallery.url}>
        <h1>gallery</h1>
      </Route>
      <Route path='*'>
        <Redirect to={routes.homePage.url} />
      </Route>
    </Switch>
  );
}
