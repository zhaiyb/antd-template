import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Routes from './routes';
import stores from './stores';
import './less/index.less';


moment.locale('zh_CN');

const localeData = {
  email_message: '{name}, you have { count } { count -> message | messages } to read.',
};

ReactDOM.render(
  <Provider {...stores}>
    {Routes}
  </Provider>,
  document.getElementById('root')
);
