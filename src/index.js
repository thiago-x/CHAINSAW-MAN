import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './01 - Header/Header'
import Sinopse from './02 - sinopse/Sinopse'
import Anime from './03 - anime/Anime'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Header/>
    < Sinopse/>
    < Anime/>
  </React.StrictMode>
);
