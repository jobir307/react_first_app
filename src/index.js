import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const txt = 'Hello, sammi'

const el = (
  <div>
    <h1 className='greeting'>{['val1', 'val2']}</h1>
    <input type='text' />
    <button>click</button>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el);

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */