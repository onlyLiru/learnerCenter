import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, hashHistory} from 'react-router';
require('uikit/css/components/dotnav.almost-flat.min.css');
require('uikit/css/components/slidenav.min.css');
const Index=require('../common/index.js');
 
ReactDOM.render(
    <Index />, 
    document.getElementById('root')
);
