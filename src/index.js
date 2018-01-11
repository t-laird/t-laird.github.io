import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const appRouter = 
  <BrowserRouter>
    <div className="bgOverlay">
      <App />
    </div>
  </BrowserRouter>;

ReactDOM.render(appRouter, document.getElementById('root'));
registerServiceWorker();
