import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './reducer';
import '../src/css/bootstrap.min.css';
import '../src/css/cover.css';
const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

export default store;
