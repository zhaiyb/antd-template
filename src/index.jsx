import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import rootStore from './stores';
import './less/index.less';

moment.locale('zh_CN');

ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
