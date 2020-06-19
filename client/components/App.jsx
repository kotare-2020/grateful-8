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

  shootFire = () => {}

  // set div that updates state to be around cursor
  // on context click, set state to flame

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
            {/* <div onDragEnter={this.shootFire} >Shoot Fire animation</div> */}
            {/* <h1>Your fate is: {this.state.question}</h1> */}
          </div>
        </Router>
      </>
    )
  }
}

export default App

{
  /* <iframe src="https://giphy.com/embed/6wpHEQNjkd74Q" width="480" height="253" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/6wpHEQNjkd74Q">via GIPHY</a></p> */
}
