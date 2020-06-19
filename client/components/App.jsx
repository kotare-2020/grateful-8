import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import MyForm from "./Form"
import Hexgrid from "./Hexgrid"
import Home from "./Home"
import EightBall from "./EightBall"

class App extends React.Component {
  state = {
    question: "",
  }

  setQuestion = (question) => this.setState({ question: question })

  render() {
    return (
      <>
        <Router>
          <div className="container">
            <Hexgrid />
            <div>
              <div className="main">
                <MyForm setQuestion={this.setQuestion} />
              </div>

              <Route exact path="/" component={Home} />
              <Route path="/Fate" component={EightBall} />
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App

