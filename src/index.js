import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';
import * as serviceWorker from './Service/serviceWorker';
import { createStore} from 'redux';
import AppReducers from './Apps/Reducers/Reducers';
import { Provider} from 'react-redux';
const Store = createStore (
        AppReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()

);
ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
document.getElementById('root'));
serviceWorker.unregister();
