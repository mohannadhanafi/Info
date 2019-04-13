import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';
import './style.css';

const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/features/view`} />
    <Route path={`${match.url}/view`} component={asyncComponent(() => import('./View'))} />
    <Route path={`${match.url}/add`} component={asyncComponent(() => import('./Add'))} />
    <Route path={`${match.url}/settings`} component={asyncComponent(() => import('./Settings'))} />
    <Route path={`${match.url}/home`} component={asyncComponent(() => import('./HomeFeatures'))} />
    <Route path={`${match.url}/:id`} component={asyncComponent(() => import('./Edit'))} />


  </Switch>
);

export default Table;
