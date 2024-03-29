import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.min.css'
import './index.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
