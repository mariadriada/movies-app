import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import configureStore from './store'
import Movies from './components/Movies'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>  
      <Movies />
    </Provider>
  );
}

export default App;
