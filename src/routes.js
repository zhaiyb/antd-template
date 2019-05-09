import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import pageURL from './constants/pageURL';

const delay = 250;
const timeout = 10000;
const routeMap = [{
  path: pageURL.demo,
  component: './containers/Demo'
}]
export default (
  <BrowserRouter>
      <Switch>
        {
        routeMap.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={
                item.redirect ? (() => {
                  return <Redirect to={item.redirect} />;
                }) : Loadable({
                  loader: () => {
                    return import(`${item.component}`);
                  },
                  delay,
                  timeout
                })
              }
            />
          );
        })
      }
      </Switch>
  </BrowserRouter>
);
