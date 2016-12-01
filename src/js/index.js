import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, hashHistory} from 'react-router';
require('uikit/css/components/dotnav.almost-flat.min.css');
require('uikit/css/components/slidenav.min.css');
require('../css/common.scss');
var Header = require('../common/header.js');
var Nav = require('../common/nav.js');
const T1 = require('../channel/template1.js');

var Main = React.createClass({
    render: function() {
        return ( < div >
            < Header / >
            < Nav / >
            < T1 / >
            < /div>
        )
    }
});

ReactDOM.render( < Main / > ,
    document.getElementById('J_Container')
);
