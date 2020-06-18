import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import answersData from '../../data/data'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <h1>Grateful 8</h1>
          <div class="container">
          </div>
        </Router>
      </>
    )
  }
}

export default App