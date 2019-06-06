import { hot } from 'react-hot-loader/root';
import React from 'react';
import Loadable from 'react-loadable';
import Loading from '_components/Loading';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import pageURL from './constants/pageURL';

const delay = 250;
const timeout = 10000;
const routeMap = [{
  path: pageURL.home,
  exact: true,
  component: './containers/Home',
}, {
  path: pageURL.ueditor,
  component: './containers/UEditor',
}, {
  path: pageURL.swiper,
  component: './containers/Swiper',
}];
const App = () => (
  <BrowserRouter>
    <Switch>
      {
        routeMap.map(item => (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            component={
              item.redirect ? (() => <Redirect to={item.redirect} />) : Loadable({
                loader: () => import(`${item.component}`),
                loading: Loading,
                delay,
                timeout,
              })
            }
          />
        ))
      }
    </Switch>
  </BrowserRouter>
);
export default hot(App);
