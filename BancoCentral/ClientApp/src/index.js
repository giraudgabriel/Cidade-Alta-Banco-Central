import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));


ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    rootElement);