import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Gallery } from './Gallery';

ReactDOM.render(window.location.pathname === '/gallery' ?  <Gallery/> : <div/>, document.getElementById('root'));
