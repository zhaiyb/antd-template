import { hot } from 'react-hot-loader/root';
import React from 'react';
import Loadable from 'react-loadable';
import Loading from '_components/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pageURL from './constants/pageURL';

const delay = 250;
const timeout = 10000;
const routeMap = [{
  path: pageURL.home,
  exact: true,
  component: './containers/Home'
},{
  path: pageURL.demo,
  component: './containers/Demo'
}]
const App = () => {
  return (
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
                    loading: Loading,
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
} 
export default hot(App)

