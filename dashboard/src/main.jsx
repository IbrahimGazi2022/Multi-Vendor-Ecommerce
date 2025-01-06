import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            position: 'top-right',
            background: '#283046',
            color: '#fff',
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>,
);
