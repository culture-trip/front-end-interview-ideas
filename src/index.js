import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Gallery } from './Gallery';
import { SubscriptionForm } from './SubscriptionForm';

ReactDOM.render(window.location.pathname === '/gallery' ?  <Gallery/> : <SubscriptionForm/>, document.getElementById('root'));
