import React from 'react';
import {Router, Route} from 'react-router' ;

import IndexPage from './containers/index-page/index-page' ;

export default (
    <Router>
        <Route path="/" component={IndexPage} />
    </Router>);