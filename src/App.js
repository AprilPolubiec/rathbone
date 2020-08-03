import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Videos from './pages/Videos'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/music'>
            <Music />
          </Route>
          <Route exact path='/videos'>
            <Videos />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
