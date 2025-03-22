import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);