import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import MyForm from "./Form"
import Fate from "./Fate"

class App extends React.Component {
  state = {
    question: "",
  }

  setQuestion = (question) => {
    this.setState({ question: question })
  }

  render() {
    return (
      <>
        <Router>
          <h1>React development has begun!</h1>

          <MyForm setQuestion={this.setQuestion} />

          <Route exact path="/Fate" component={Fate} />

          {/* <Route exact path="/" component={Home} /> */}

          {/* Do we still need/want this  if not we can get rid of a lot of code */}
          <h1>Your fate is: {this.state.question}</h1>
        </Router>
      </>
    )
  }
}

export default App
