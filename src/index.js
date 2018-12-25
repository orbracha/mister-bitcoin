import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import RootStore from './store/RootStore.js';
import './assets/styles.scss'

// import registerServiceWorker from './registerServiceWorker';
const rootStore = new RootStore();
rootStore.UserStore.loadUser();
ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();


