import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UseHook from './useStateHook';

import RickAndMorty from './RickAndMorty'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseHook /> */}
    <RickAndMorty />
  </React.StrictMode>
);


