import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import getRandomAnswer from '../../server/js/getRandomAnswer'

import MyForm from "./Form"
import Fate from "./Fate"
import Hexgrid from "./Hexgrid"

class App extends React.Component {
  state = {
    question: "",
  }

  setQuestion = (question) => {
    this.setState({ question: question })
  }

  render() {
    let randomAnswer = getRandomAnswer().answer
    return (
      <>
        <Router>
          <div className="container">
            <Hexgrid />
            <div className="main">
              <h1>Grateful 8</h1>
              <MyForm setQuestion={this.setQuestion} />
              <h1>{randomAnswer}</h1>

              <Route exact path="/Fate" component={Fate} />

              {/* <Route exact path="/" component={Home} /> */}

              {/* Do we still need/want this  if not we can get rid of a lot of code */}
              <h1>Your fate is: {this.state.question}</h1>
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App