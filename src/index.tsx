import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux store and redux-saga imports
import {sagaMiddleware, store} from "./store/store";
import {rootSaga} from "./store/reducers";
import {Provider} from "react-redux";

sagaMiddleware.run(rootSaga);

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);

render();

