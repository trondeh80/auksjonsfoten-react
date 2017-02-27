import React, {Component} from 'react'  ;

import './header-nav.scss';

export default class HeaderNav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <header className="top">
            <div className="logo">logo</div>
            <div className="menu">meny</div>
        </header>
    }
}

