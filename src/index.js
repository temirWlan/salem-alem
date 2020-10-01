import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import 'normalize.css';
import './index.css';

// import state from './state';
import App from './App';
import { avatar, grayBlock } from './state';
 

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
  document.getElementById('root')
);


