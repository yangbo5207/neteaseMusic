import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from './pages/Navigator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Navigator} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
