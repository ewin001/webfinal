import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const App2 = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
