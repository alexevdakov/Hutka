import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store';

import App from './features/App';

const store = configureStore();

export default function Application() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
