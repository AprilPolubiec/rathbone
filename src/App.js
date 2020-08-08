import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Page from './components/Page'
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
          <Route exact path='/music' component={Page(Music)}></Route>
          <Route exact path='/videos' component={Page(Videos)}>
            <Videos />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
