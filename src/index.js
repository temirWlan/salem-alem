import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';
import App from './components/App/App';

import 'normalize.css';
import './index.css';
 

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
  document.getElementById('root')
);


