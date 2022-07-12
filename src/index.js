import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

<<<<<<< Updated upstream
=======
const container = document.getElementById('root');

<<<<<<< Updated upstream
const root = createRoot(container);
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Provider store ={store}>
=======
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
>>>>>>> Stashed changes
        <App />
    </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>
);


