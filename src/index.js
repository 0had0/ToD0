import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/todo';

import './index.css';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App store = {store} />
    </Provider>,
    document.getElementById('root'));
