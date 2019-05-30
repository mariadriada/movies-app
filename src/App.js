import React from 'react';
import { Provider } from 'react-redux'
import { Router,Route, Switch } from 'react-router-dom'

import configureStore from './store'
import Movies from './components/Movies'
import history from './history'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>  
      <Router history = {history}>
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movies' component={Movies} />
        </Switch>
      </Router>     
    </Provider>
  );
}

export default App;
