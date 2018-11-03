import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import heaven from './components/heaven'
import home from './components/home'
import underground from './components/underground'
import { BulletSwitch } from './components/Switch'

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BulletSwitch/>
        <Switch>
          <Route exact path="/heaven" component={heaven} />
          <Route exact path="/" component={home}/>
          <Route exact path="/underground" component={underground}/>
          <Redirect from="/h" to="/heaven" />
          <Redirect from="/land" to="/" />
          <Redirect from="/u" to="/underground" />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
