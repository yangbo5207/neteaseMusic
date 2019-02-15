import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Navigator from './pages/Navigator';
import * as store from './store';

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Navigator} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
