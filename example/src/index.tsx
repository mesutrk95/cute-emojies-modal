import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CuteEmojiesConfirmContainer } from 'cute-emojies-modal';

import 'cute-emojies-modal/dist/index.min.css';

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