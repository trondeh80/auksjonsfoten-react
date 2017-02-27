import ReactDOM from 'react-dom' ;
import React from 'react' ;
import {Provider} from 'react-redux' ;
import {browserHistory, Router} from 'react-router' ;
import {syncHistoryWithStore} from 'react-router-redux' ;

import configureStore from './store/configureStore';
import routes from './routes' ;

import 'normalize.css' ;
import '../scss/app.scss' ;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<Provider store={store}>
    <Router routes={routes} history={history}/>
</Provider>, document.getElementById('root'));
