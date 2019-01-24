import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import { MOCK_STATE } from './helper/mock'

const store = createStore(rootReducer)
const state = store.getState()
Object.entries(MOCK_STATE).forEach(
    ([key, value]) => (state[key] = { ...value, ...MOCK_STATE[key] })
)
localStorage.removeItem('user'); 
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();