import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CuteEmojiesConfirmContainer } from 'cute-emojies-confirm';

import 'cute-emojies-confirm/dist/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />

    <CuteEmojiesConfirmContainer />
  </React.StrictMode>
); 