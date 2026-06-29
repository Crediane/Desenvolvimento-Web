import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Se antes tinha algum import de CSS aqui (como import './index.css'), 
// você pode adicioná-lo de volta nesta linha!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);