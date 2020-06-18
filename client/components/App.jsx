import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import getRandomAnswer from '../../server/js/getRandomAnswer'

class App extends React.Component {
  render() {
    let randomAnswer = getRandomAnswer().answer
    return (
      <>
        <Router>
          <h1>Grateful 8</h1>
          <div className="container">
            <h1>{randomAnswer}</h1>
          </div>
        </Router>
      </>
    )
  }
}

export default App