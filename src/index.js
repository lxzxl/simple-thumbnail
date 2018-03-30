import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Thumbnail from './containers/Thumbnail';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

import { createStore } from 'redux';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Thumbnail />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
