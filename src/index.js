import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { unregister } from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

const appRouter = 
  <BrowserRouter>
    <div className="bgOverlay">
      <App />
    </div>
  </BrowserRouter>;

ReactDOM.render(appRouter, document.getElementById('root'));
unregister();