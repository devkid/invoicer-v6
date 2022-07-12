import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');

<<<<<<< Updated upstream
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store ={store}>
=======
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
>>>>>>> Stashed changes
        <App />
    </Provider>
  </React.StrictMode>
);


