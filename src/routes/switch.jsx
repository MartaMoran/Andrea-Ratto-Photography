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
      <Route path={routes.Europa.url}>
        <Layout>
          <h1>Europa</h1>
        </Layout>
      </Route>
      <Route path={routes.lavapies.url}>
        <Layout>
          <h1>lavapies</h1>
        </Layout>
      </Route>
      <Route path={routes.gallery.url}>
        <Layout>
          <h1>Series</h1>
        </Layout>
      </Route>
      <Route path={routes.Bio.url}>
        <Layout>
          <h1>Bio</h1>
        </Layout>
      </Route>
      <Route path={routes.Contact.url}>
        <Layout>
          <h1>Contact</h1>
        </Layout>
      </Route>
      <Route path='*'>
        <Redirect to={routes.homePage.url} />
      </Route>
    </Switch>
  );
}
