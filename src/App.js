import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import heaven from './components/heaven'
import home from './components/home'
import underground from './components/underground'

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/heaven" component={heaven} />
          <Route exact path="/" component={home}/>
          <Route exact path="/underground" component={underground}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App;
